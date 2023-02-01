const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let maxScore = [0,0,0,0];

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(3000);
console.log('Server is online.');

app.post('/', function(req, res) {
    maxScore[req.body.lev] = Math.max(maxScore[req.body.lev],req.body.score);
    console.log(req.body);
    res.json({score:maxScore[req.body.lev]});
})

app.get("/app-ads.txt",function(req,res){
    res.set('Content-Type', 'text/plain')
    res.send("google.com, pub-8493044522329514, DIRECT, f08c47fec0942fa0");
})