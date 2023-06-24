const router = require('express').Router();
const todoController = require('../controller/todo/todoController')

// Todo 작성페이지 조회
router.get('/write', (req, res) => {
    res.render('todo/todoWritePage.ejs');
})

router.post('/write', todoController.todoWriteController);

module.exports = router;