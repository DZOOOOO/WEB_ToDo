const db = require('../../db/db');
const bcrypt = require("bcrypt");

module.exports = {
    registerMember(email, password, nickName, res) {
        let enPW = bcrypt.hashSync(password, 1);

        db.query(`INSERT INTO mydb.member (email, password, nickName, profile_img, grade) VALUES ('${email}', '${enPW}', '${nickName}', 'BASIC', 'BRONZE')`,
            function (err, result) {
                if (err) {
                    res.status(400).json({message: '확인 후 다시 해주세요..!'});
                } else {
                    res.status(200).json({message: '회원가입 성공..!'});
                }
            });
    },

    // Passport 적용전.
    loginMember(email, password, res) {
        db.query(`SELECT * FROM mydb.member WHERE email = '${email}'`, function (err, result) {
            let checkPW = bcrypt.compareSync(password, result[0].password);
            if (checkPW) {
                res.status(200).json({message: '로그인 성공..!'});
            } else {
                res.status(400).json({message: '로그인 실패..!'});
            }
        });
    }
}