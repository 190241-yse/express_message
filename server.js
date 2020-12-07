//express モジュールの読み込み
const express = require('express');

//サーバー作成
const app = express();

//ルーティング
// webルートにリクエストされたらレスポンス
app.get('/', (req, res) => {
      res.send('Hello Express!');
});

app.listen(3000);

console.log('server listen: http://localhost:3000');