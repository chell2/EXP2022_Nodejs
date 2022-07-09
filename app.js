// app.js

import express from 'express';
// おみくじのrouterを読み込む
import { omikujiRouter } from './routes/omikuji.route.js';
// じゃんけんのrouterを読み込む
import { jankenRouter } from './routes/janken.route.js';

const app = express();
// ↓postで送られてきたデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// JSONデータを使用するために必要
app.use(express.json());

const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello Node.js!');
});

// おみくじのルーティングを変更
app.use('/omikuji', (req, res) => omikujiRouter(req, res));
// app.get("/omikuji", (req, res) => {
//   const omikuji = ['大吉', '中吉', '小吉', '凶', '大凶'];
//   const min = 0;
//   const max = omikuji.length - 1;
//   const index = Math.floor(Math.random() * (max - min + 1)) + min;
//   res.json({
//     uri: '/omikuji',
//     message: omikuji[index],
//   });
// });

// じゃんけんのルーティングを変更
app.use('/janken', (req, res) => jankenRouter(req, res));
// app.get('/janken', (req, res) => {
//   res.json({
//     uri: '/janken',
//     message: 'This is Janken URI!',
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
