const todo_db = require('../../db/todo/todo_db');

module.exports = {
    // todo 작성 페이지
    todoWritePageViewController(req, res) {
        res.render('todo/todoWritePage.ejs');
    },

    // todo 작성
    todoWriteController(req, res) {
        // 유효성 검증
        let todo = req.body?.todo;
        let date = req.body?.date;
        let memberId = req.user?.id.id;

        if (todo === undefined || date === undefined) {
            res.status(400).json({message : '다시 입력해주세요..!'});
        }
        todo_db.saveTodo(todo, date, memberId, res);
    },

    // todo 페이지리스트 조회
    todoListViewController(req, res) {
        let member = req.user.id;
        todo_db.listTodo(member, res);
    },

    // todo 완료
    todoCompleteController(req, res) {
        let complete = req.body?.complete;
        let todoId = req.body?.todoId;
        todo_db.todoComplete(complete, todoId, res);
    },

    // todo 수정
    todoEditController(req, res) {
        let editTodo = req.body?.editTodo;
        let todoId = req.body?.todoId;
        let editDate = req.body?.editDate;
        if (editTodo === undefined || editDate === undefined) {
            res.stats(400).json({message: '공백없이 입력해주세요.!'});
        }
        todo_db.editTodo(todoId, editTodo, editDate, res);
    },

    // todo 삭제
    todoDeleteController(req, res) {

    }
}