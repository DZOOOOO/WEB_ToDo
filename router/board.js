const router = require('express').Router();
const boardController = require('../controller/board/boardController');

// 게시글 리스트
router.get('/list', boardController.viewBoardList);

// 게시글 상세조회
router.get('/detail/:id', boardController.viewBoardDetail);

// 게시글 작성페이지 조회
router.get('/write', boardController.viewBoardWrite);

// 게시글 작성
router.post('/write', boardController.writeBoard);

// 게시글 수정 페이지 조회
router.get('/edit/:id', boardController.viewBoardEdit)

// 게시글 수정
router.patch('/edit/:id', boardController.editBoard);

// 게시글 삭제
router.delete('/delete/:id', boardController.deleteBoard);

module.exports = router;