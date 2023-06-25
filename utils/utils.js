module.exports = {
    checkLogin(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/member/login');
        }
    }

}
