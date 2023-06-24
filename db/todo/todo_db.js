const db = require('../../db/db');

module.exports = {
    saveTodo(todo, date, res) {
        // DB 로직

        console.log(`todo ===> ${todo}, date ===> ${date}`);
        res.status(200).json({message : '작성완료..!'});
    },


}