const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); // 전역 CORS 허용
app.use(express.json()); // JSON 요청 본문 파싱

app.post('/api/data', (req, res) => {
  console.log("받은 데이터:", req.body);
  res.json({ message: "데이터 잘 받았어요!", yourData: req.body });
});

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});
