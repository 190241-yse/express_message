//express モジュールの読み込み
const express = require('express');

//サーバー作成
const app = express();

// json対応
app.use(express.json());
// URL エンコードされたデータを解析する
app.use(express.urlencoded({ extended: true}));

//クロスドメインの許可
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});

app.post('/', (req, res) => {
    let result = {
        message: req.body.message,
        datetime: new Date(),
    };
    res.send(result);
});

//ルーティング
// webルートにリクエストされたらレスポンス
app.get('/', (req, res) => {
      res.send('Hello Express!');
});

app.listen(3000);

console.log('server listen: http://localhost:3000');