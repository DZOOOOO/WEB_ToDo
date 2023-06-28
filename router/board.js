const router = require('express').Router();
const boardController = require('../controller/board/boardController');

//////////////////////////  AWS S3 설정 //////////////////////////

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
});

// req.file.location ==> S3 이미지 경로 들어있음..!
let uploadS3 = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'todoapps3',
        key(req, file, cb) {
            cb(null, `board/${Date.now()}${path.basename(file.originalname)}`);
        },
    }),
    fileFilter: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
            return callback(new Error('PNG, JPG, JPEG, GIF 만 업로드하세요..!'));
        }
        callback(null, true);
    },
    limits: {
        // 5MB 이하만 가능
        fileSize: 1024 * 1024 * 5
    }
});

// 게시글 리스트
router.get('/list', boardController.viewBoardList);

// 게시글 상세조회
router.get('/detail/:id', boardController.viewBoardDetail);

// 게시글 작성페이지 조회
router.get('/write', boardController.viewBoardWrite);

// 게시글 작성 (이미지 업로드 추가)
router.post('/v1/write', uploadS3.single('image'), boardController.writeBoard);

// 게시글 수정 페이지 조회
router.get('/edit/:id', boardController.viewBoardEdit)

// 게시글 수정
router.patch('/edit/:id', boardController.editBoard);

// 게시글 삭제
router.delete('/delete/:id', boardController.deleteBoard);

module.exports = router;