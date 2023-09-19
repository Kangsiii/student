const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors());

// JSON 파싱 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 설정
const loginRouter = require('./routes/login');
app.use('/api/login', loginRouter);

// 서버 시작
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});