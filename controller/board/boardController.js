const board_db = require('../../db/board/board_db')
const {viewBoard, editBoard} = require("../../db/board/board_db");

module.exports = {
    viewBoardList(req, res) {
        board_db.viewBoardList(res);
    },

    viewBoardDetail(req, res) {
        let boardId = req.params?.id;
        let loginUser = req.user.id;
        viewBoard(boardId, loginUser, res);
    },

    viewBoardWrite(req, res) {
        res.render('board/boardWrite.ejs');
    },

    writeBoard(req, res) {
        let title = req.body?.title;
        let content = req.body?.content;
        // 로그인된 맴버 객체는 req.user.id에 들어있다.
        let member_id = req.user.id?.id;

        // 이미지 파일 업로드 로직 필요..
        let img_url;

        let data = {
            title,
            content,
            member_id
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
        board_db.editBoard(boardId, title, content, res);
    },

    deleteBoard(req, res) {
        let boardId = req.params?.id;
        board_db.deleteBoard(boardId, res);
    }

}