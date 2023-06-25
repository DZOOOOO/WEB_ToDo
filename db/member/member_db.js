const db = require('../../db/db');
const bcrypt = require("bcrypt");

module.exports = {
    // 회원가입
    registerMember(email, password, nickName, res) {
        let enPW = bcrypt.hashSync(password, 1);
        db.query(`INSERT INTO mydb.member (email, password, nickName, profile_img, grade) VALUES ('${email}', '${enPW}', '${nickName}', 'BASIC', 'BRONZE')`,
            function (err) {
                if (err) {
                    res.status(400).json({message: '확인 후 다시 해주세요..!'});
                } else {
                    res.status(200).json({message: '회원가입 성공..!'});
                }
            });
    },


}