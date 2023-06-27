const comment_db = require('../../db/comment/comment_db');

module.exports = {
    viewCommentController(req, res) {
        let loginUser = req.user.id;
        let boardId = req.params.boardId;
        comment_db.viewComment(boardId, loginUser, res);
    },
    writeCommentController(req, res) {
        let data = req.body;
        let loginUser = req.user.id;
        comment_db.writeComment(loginUser, data, res);
    },
    editCommentController(req, res) {
        let commentId = req.body?.commentId;
        let comment = req.body?.comment;
        comment_db.editComment(commentId, comment, res);
    },
    deleteCommentController(req, res) {
        let commentId = req.params.id;
        comment_db.deleteComment(commentId, res);
    },
}