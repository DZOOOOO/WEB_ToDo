const member_db = require('../../db/member/member_db');

module.exports = {
    // 회원가입
    registerPageViewController(req, res) {
        res.render('member/memberRegisterPage.ejs');
    },
    memberRegisterController(req, res) {
        // 유효성 검증 한번 더???????
        let email = req.body?.email;
        let password = req.body?.password;
        let nickName = req.body?.nickName;
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
            req.session.destroy(); // --> req.session 제거 --> 로그아웃
            res.redirect("/"); // --> 메인 페이지로 이동
        });
    },

    // 마이 페이지 (유저가 작성한 todo 리스트 + 게시판 전부 조회가능하게)
    memberMyPageViewController(req, res) {
        let loginUser = req.user.id;
        let page = req.query.page;
        member_db.profileViewMember(page, loginUser, res);
    },


}