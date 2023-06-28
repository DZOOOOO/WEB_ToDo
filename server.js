const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const utils = require('./utils/utils');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

// 외부 라우터
const todo = require('./router/todo');
const member = require('./router/member');
const board = require('./router/board');
const comment = require('./router/comment');

// 템플릿 엔진 ==> ejs
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

// 라이브러리 미들웨어
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secretKey', resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

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

// // 이미지 업로드 예시
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/image');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname + new Date() + file.originalname);
//     }
// });
//
// let upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, callback) {
//         let ext = path.extname(file.originalname);
//         if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
//             return callback(new Error('PNG, JPG만 업로드하세요..!'));
//         }
//         callback(null, true);
//     },
//     limits: {
//         // 5MB 이하만 가능
//         fileSize: 1024 * 1024 * 5
//     }
// });
//
// app.get('/upload', (req, res) => {
//     res.render('upload.ejs');
// });
//
// app.post('/upload', uploadS3.single('image'), (req, res) => {
//     console.log(req.body, req.file.location);
//     res.send('S3 업로드 완료..!');
// });

// 채팅 DB ===> MongoDB
let mongoDB;
MongoClient.connect(process.env.MongoDB_URL, function (err, client) {
    if (err) return console.log(err);
    mongoDB = client.db('todoapp');

    // DB 연결 ==> 서버 실행
    app.listen('3000', () => {
        console.log('listening on 3000')
    });
})