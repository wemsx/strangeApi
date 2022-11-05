const express = require('express');
const crypto = require('crypto');
var qr = require('qr-image');
const enc = require('./encrypt/encrypt');
const dec = require('./encrypt/decrypt');
const aes = require('./aes/aes');
const app = express();
const port = 80;

app.get('/qrcode/png',function(req,res){
    var text = req.query.t;
    var code = qr.image(text,{type:'png'});
    code.pipe(res);
});
app.get('/qrcode/svg',function(req,res){
    var text = req.query.t;
    var code = qr.imageSync(text,{type:'svg' , size:'10'});
    res.send(code);
});
/*
app.post('/enc/sha1',function(req,res){
    var text = req.body.text
    var texted = enc.getSHA1(text);
    res.status(200).send('sha1加密结果是'+ texted);
});*/


app.listen(port, () => console.log(`StrangeApi is Running on port ${port}!`));