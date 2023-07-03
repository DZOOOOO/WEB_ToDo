const db = require('../../db/db');
const bcrypt = require("bcrypt");

module.exports = {
    // 회원가입
    registerMember(email, password, nickName, res) {
        db.query(`SELECT * FROM mydb.member WHERE email = '${email}'`, (err, result1) => {
            if (result1.length !== 0) return res.status(400).json({message: '이메일 중복입니다..!'});

            db.query(`SELECT * FROM mydb.member WHERE nickName = '${nickName}'`, (err, result2) => {
                if (result2.length !== 0) return res.status(400).json({message: '닉네임 중복입니다.'});

                let enPW = bcrypt.hashSync(password, 1);
                db.query(`INSERT INTO mydb.member (email, password, nickName, profile_img, grade) VALUES ('${email}', '${enPW}', '${nickName}', 'BASIC', 'BRONZE')`,
                    function (err) {
                        if (err) {
                            return res.status(400).json({message: '이메일, 비밀번호, 닉네임 확인 후 다시 해주세요..!'});
                        } else {
                            return res.status(200).json({message: '회원가입 성공..!'});
                        }
                    });
            })
        })
    },

    profileViewMember(page, loginUser, res) {
        // query 숫자가 아닌경우
        if (isNaN(page)) page = 0;
        // 로그인 유저정보 + 작성한 게시글 + 작성한 TODOLIST
        let userEmail = loginUser.email;
        let userNickName = loginUser.nickName;
        let userProfile_img = loginUser.profile_img;
        let userGrade = loginUser.grade;
        let data =
            {
                userEmail,
                userNickName,
                userProfile_img,
                userGrade,
                page
            };
        db.query(`SELECT * FROM mydb.board WHERE member_id = ${loginUser.id} LIMIT ${page * 5}, 5`, (err, result1) => {
            data.boardList = result1;
            db.query(`SELECT * FROM mydb.todo WHERE member_id = ${loginUser.id} AND complete = 1`, (err, result2) => {
                data.todoList = result2;
                // res.status(200).json({message: '성공..!', data});
                res.render('member/memberProfile.ejs', {data});
            });
        });
    }
}