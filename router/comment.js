const router = require('express').Router();
const commentController = require('../controller/comment/commentController');

// 게시글에 있는 댓글
router.get('/view/:boardId', commentController.viewCommentController);

// 댓글 작성
router.post('/write', commentController.writeCommentController);

// 댓글 수정
router.patch('/edit/:id', commentController.editCommentController);

// 댓글 삭제
router.delete('/delete/:id', commentController.deleteCommentController);

module.exports = router;