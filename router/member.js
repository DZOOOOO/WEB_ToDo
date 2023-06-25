const router = require('express').Router();
const memberController = require('../controller/member/memberController');
const passport = require("passport");
const {Strategy: LocalStrategy} = require("passport-local");
const db = require("../db/db");
const bcrypt = require("bcrypt");
const utils = require('../utils/utils');

// 회원가입 페이지 조회
router.get('/view', memberController.registerPageViewController);

// 회원가입
router.post('/register', memberController.memberRegisterController);

// 마이페이지 조회
router.get('/profile', utils.checkLogin, memberController.memberMyPageViewController);

// 로그아웃
router.get('/logout', memberController.memberLogoutController);

// 로그인 페이지 조회
router.get('/login', memberController.memberLoginPageViewController);

// 로그인
router.post('/login', passport.authenticate('local', {failureRedirect: '/fail'}
), memberController.memberLoginController);

////////////// PASSPORT 설정 /////////////////
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
    passReqToCallback: false
}, (email, password, done) => {
    db.query(`SELECT * FROM mydb.member WHERE email = '${email}'`, function (err, result) {
        let checkPW = bcrypt.compareSync(password, result[0].password);
        if (err) return done(err);
        if (result.length === 0) return done(null, false, {message: '존재하지 않는 아이디 입니다..!'});
        if (checkPW) {
            return done(null, result);
        } else {
            return done(null, false, {message: '비밀번호가 틀렸습니다..!'});
        }
    });
}))

passport.serializeUser(function (user, done) {
    done(null, user[0]);
});

passport.deserializeUser(function (id, done) {
    done(null, {id});
})

module.exports = router;
