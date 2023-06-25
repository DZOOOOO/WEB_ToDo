const member_db = require('../../db/member/member_db');

module.exports = {
    // 회원가입
    registerPageViewController(req, res) {
        res.render('member/memberRegisterPage.ejs');
    },
    memberRegisterController(req, res) {
        // 데이터 유효성 검증
        let email = req.body.email;
        let password = req.body.password;
        let nickName = req.body.nickName;

        // 비밀번호 암호화

        member_db.registerMember(email, password, nickName, res);
    },

    // 로그인
    memberLoginPageViewController(req, res) {
        res.render('member/memberLogin.ejs');
    },

    memberLoginController(req, res) {
        res.status(200).json({message: '로그인 성공..!'});
    },

    // 로그아웃
    memberLogoutController(req, res) {
        // req.user ==> 제거
        req.logout(() => {
            req.session.destroy(); // --> req.session 제거
            // 메인 페이지로 이동
            res.redirect("/");
        });
    },

    // 마이 페이지
    memberMyPageViewController(req, res) {
        console.log(JSON.stringify(req.user.id));
        // 유저가 작성한 todo 리스트 + 게시판 전부 조회가능하게
        let data = {
            user: req.user,
        }

        res.render('member/memberProfile.ejs', {data});
    },


}