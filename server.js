const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todo = require('./router/todo');


// 템플릿 엔진 ==> ejs
app.set('view engine', 'ejs');

// 라이브러리 미들웨어
app.use(bodyParser.urlencoded({extended : true}));

// 라우터 미들웨어
app.use('/todo', todo);



app.listen(3000, () => {
    console.log('listening on 3000')
});