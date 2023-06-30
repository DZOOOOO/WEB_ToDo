const db = require('../../db/db');

module.exports = {
    // ToDo 작성
    saveTodo(todo, date, memberId, res) {
        db.query(`INSERT INTO mydb.todo (todo, date, complete, member_id) VALUES ('${todo}', '${date}', false, '${memberId}')`,
            (err) => {
                if (err) {
                    return res.status(400).json({message: '다시 시도해주세요..!'});
                } else {
                    return res.status(200).json({message: '작성완료..!'});
                }
            });
    },

    // 로그인한 맴버의 TodoList 출력..!
    listTodo(member, res) {
        db.query(`SELECT * FROM mydb.todo WHERE member_id = ${member.id}`, (err, result) => {
            let filterResult = [];
            for (let i = 0; i < result.length; i++) {
                filterResult[i] = {
                    id: result[i].id,
                    todo: result[i].todo,
                    date: result[i].date.toLocaleDateString(),
                    complete: result[i].complete,
                    member_id: result[i].member_id
                }
            }
            if (err) {
                // 에러 페이지 렌더링..
                return res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                return res.render('todo/todoListPage.ejs', {
                    filterResult: filterResult.reverse(),
                    member: member.nickName
                });
            }
        });
    },

    // ToDo 완성
    todoComplete(complete, todoId, res) {
        db.query(`UPDATE mydb.todo SET complete = ${complete} WHERE id = ${todoId}`, (err, result) => {
            if (err) {
                return res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                return res.status(200).json({message: '성공..!'});
            }
        })
    },

    // ToDo 수정
    editTodo(todoId, editTodo, editDate, res) {
        db.query(`UPDATE mydb.todo SET todo = '${editTodo}', date = '${editDate}' WHERE id = ${todoId}`, (err) => {
            if (err) {
                return res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                return res.status(200).json({message: '성공..!'});
            }
        });
    }
}