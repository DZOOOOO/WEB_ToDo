const db = require('../../db/db');

module.exports = {
    viewComment(boardId, loginUser, res) {
        db.query(`SELECT comment.id, board_id, comment, nickName, member_id FROM mydb.comment left join member on comment.board_id WHERE board_id = ${boardId} AND member_id = member.id`
            , (err, result) => {
                if (err) {
                    res.status(400).json({message: '조회 실패'});
                } else {
                    res.status(200).json({message: '조회 성공', loginUser: loginUser.id, result: result});
                }
            });
    },
    writeComment(loginUser, data, res) {
        let comment = data.comment;
        let boardId = data.boardId;

        db.query(`INSERT INTO mydb.comment (comment, board_id, member_id) VALUES ('${comment}', ${boardId}, ${loginUser.id})`, (err) => {
            if (err) {
                res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                res.status(200).json({message: '작성성공..!'});
            }
        });
    },
    editComment(commentId, comment, res) {
        db.query(`UPDATE mydb.comment SET comment = '${comment}' WHERE id = ${commentId}`, (err) => {
            if (err) {
                res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                res.status(200).json({message: '수정 성공..!'});
            }
        });
    },
    deleteComment(commentId, res) {
        db.query(`DELETE FROM mydb.comment WHERE id = ${commentId}`, (err) => {
            if (err) {
                res.status(400).json({message: '다시 시도해주세요..!'});
            } else {
                res.status(200).json({message: '삭제 성공..!'});
            }
        });
    },
}