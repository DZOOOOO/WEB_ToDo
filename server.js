const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const cors = require('cors');
const utils = require('./utils/utils');
require('dotenv').config();

// 외부 라우터
const todo = require('./router/todo');
const member = require('./router/member');
const board = require('./router/board');
const comment = require('./router/comment');

// 템플릿 엔진 ==> ejs
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

// 라이브러리 미들웨어
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: process.env.SESSION_SECRET_KEY, resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// CORS 처리
app.use(cors({origin: process.env.CORS}));

// 라우터 미들웨어
app.use('/todo', utils.checkLogin, todo);
app.use('/member', member);
app.use('/board', utils.checkLogin, board);
app.use('/comment', utils.checkLogin, comment);

// 메인 페이지
app.get('/', (req, res) => {
    let loginMember = req.user;
    res.render('index.ejs', {info: loginMember});
});

app.get('/publicdata', utils.checkLogin, (req, res) => {
    let loginMember = req.user;
    res.render('publicdata/publicdata.ejs', {
        info: loginMember,
        apicode: process.env.PUBLIC_DATA_ENCODING
    });
});

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
});