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


}