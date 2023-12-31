const board_db = require('../../db/board/board_db')

module.exports = {
    viewBoardList(req, res) {
        let query = req.query;
        board_db.viewBoardList(query, res);
    },

    viewBoardDetail(req, res) {
        let boardId = req.params?.id;
        let loginUser = req.user.id;
        board_db.viewBoard(boardId, loginUser, res);
    },

    viewBoardWrite(req, res) {
        res.render('board/boardWrite_V1.ejs');
    },

    // 이미지 업로드 추가 ==> 로컬, S3 상황에 따라 적용
    writeBoard(req, res) {
        let title = req.body?.title;
        let content = req.body?.content;
        // 로그인된 맴버 객체는 req.user.id에 들어있다.
        let member_id = req.user.id?.id;
        // req.file.location ==> AWS S3 이미지 url 경로
        let img_url_s3 = req.file?.location;
        // req.file?.path ==> 로컬 파일 경로
        let img_url = req.file?.path;

        let data = {
            title,
            content,
            member_id,
            img_url
        };
        board_db.writeBoard(data, res);
    },

    viewBoardEdit(req, res) {
        let boardId = req.params?.id;
        let editUser = req.user.id.nickName;
        board_db.editBoardView(boardId, editUser, res);
    },

    editBoard(req, res) {
        let boardId = req.params?.id;
        let title = req.body?.title;
        let content = req.body?.content;
        // ==> AWS S3 이미지 url 경로
        let img_url_s3 = req.file?.location;
        // req.file?.path ==> 로컬 파일 경로
        let img_url = req.file?.path;
        board_db.editBoard(boardId, title, content, img_url, res);
    },

    deleteBoard(req, res) {
        let boardId = req.params?.id;
        board_db.deleteBoard(boardId, res);
    }

}