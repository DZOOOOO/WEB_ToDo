const router = require('express').Router();
const todoController = require('../controller/todo/todoController')

// Todo 작성페이지 조회
router.get('/write', todoController.todoWritePageViewController);

// Todo 작성
router.post('/write', todoController.todoWriteController);

// Todo 리스트페이지 조회 (페이징 처리)
router.get('/list', todoController.todoListViewController);

// Todo 완료
router.patch('/complete/:id', todoController.todoCompleteController);

// Todo 수정
router.patch('/edit/:id', todoController.todoEditController);

// Todo 삭제
router.delete('/delete/:Id', todoController.todoDeleteController);

module.exports = router;