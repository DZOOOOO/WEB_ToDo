const db = require('../../db/db');

module.exports = {
    // 페이징 처리..!
    viewBoardList(res) {
        db.query(`SELECT board.id, title, content, nickName from board left join member on board.member_id = member.id`,
            (err, result) => {
                if (err) {
                    res.status(400).json({message: '다시 시도해주세요..!'});
                } else {
                    res.render('board/boardList.ejs', {result});
                }
            });
    },

    // 글 작성
    writeBoard(data, res) {
        db.query(`INSERT INTO mydb.board (title, content, member_id) VALUES ('${data.title}', '${data.content}', ${data.member_id})`,
            (err, result1) => {
                db.query(`INSERT INTO mydb.board_img (img_url, board_id) VALUES ('${data.img_url}', ${result1.insertId})`,
                    (err, result2) => {
                        if (err) {
                            res.status(400).json({message: '다시 시도해주세요..!'});
                        } else {
                            res.redirect(`http://localhost:3000/board/detail/${result1.insertId}`);
                        }
                    })
            });
    },

    // 상세조회
    viewBoard(boardId, loginUser, res) {
        db.query(`SELECT * FROM mydb.board WHERE id = ${boardId}`, (err, result1) => {
            db.query(`SELECT nickName FROM mydb.member WHERE id = ${result1[0].member_id}`, (err, result2) => {
                db.query(`SELECT * FROM mydb.board_img WHERE board_id = ${boardId}`, (err, result3) => {
                    let data = {
                        board: result1[0],
                        nickName: result2[0],
                        imgUrl: result3[0],
                    }
                    if (err) {
                        res.status(400).json({message: '다시 시도해주세요..!'});
                    } else {
                        res.render('board/boardDetail.ejs', {data, loginUser});
                    }
                });
            });
        });
    },

    // 수정 페이지 조회
    editBoardView(boardId, editUser, res) {
        db.query(`SELECT * FROM mydb.board WHERE id = ${boardId}`, (err, result) => {
            if (err) {
                res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                res.render('board/boardEdit.ejs', {board: result[0], nickName: editUser});
            }
        })
    },

    // 글 수정
    editBoard(boardId, title, content, res) {
        db.query(`UPDATE mydb.board SET title = '${title}', content = '${content}' WHERE id = ${boardId}`,
            (err) => {
                if (err) {
                    res.status(400).json({message: '다시 시도해주세요..!'});
                } else {
                    res.status(200).json({message: '수정 성공..!'});
                }
            });
    },

    // 글 삭제
    deleteBoard(boardId, res) {
        db.query(`DELETE FROM mydb.board WHERE id = ${boardId}`, (err) => {
            if (err) {
                res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                res.status(200).json({message: '삭제 성공..!'});
            }
        });
    }
}