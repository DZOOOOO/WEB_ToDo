const todo_db = require('../../db/todo/todo_db');

module.exports = {
    todoWriteController(req, res) {
        // 로그인 검증

        // 유효성 검증
        let todo = req.body.todo;
        let date = req.body.date;

        todo_db.saveTodo(todo, date, res);
    },
}