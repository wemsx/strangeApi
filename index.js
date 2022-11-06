const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
var qr = require('qr-image');
const enc = require('./encrypt/encrypt');
const dec = require('./encrypt/decrypt');
const aes = require('./aes/aes');
const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

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

app.post('/enc/:m',function(req,res){
    var text = req.body;
    var method = req.params.m;
    if(method === 'sha1'){res.status(200).send(enc.getSHA1(text.value));} if(method === 'sha512'){res.status(200).send(enc.getSHA512(text.value));} if(method === 'md5'){res.status(200).send(enc.getMD5(text.value));} if(method === 'md4'){res.status(200).send(enc.getMD4(text.value));} if(method === 'sha224'){res.status(200).send(enc.getSHA224(text.value));} if(method === 'sha256'){res.status(200).send(enc.getSHA256(text.value));} if(method === 'sha3-224'){res.status(200).send(enc.getSHA3_224(text.value));} if(method === 'sha3-256'){res.status(200).send(enc.getSHA3_256(text.value));} if(method === 'sha3-512'){res.status(200).send(enc.getSHA3_512(text.value));} if(method === 'mdc2'){res.status(200).send(enc.getMDC2(text.value));} if(method === 'ripemd'){res.status(200).send(enc.getripemd(text.value));} if(method === 'sm3'){res.status(200).send(enc.getsm3(text.value));} if(method === 'whirlpool'){res.status(200).send(enc.getwhirlpool(text.value));} if(method === 'sha512-224'){res.status(200).send(enc.getSHA512_224(text.value));} if(method === 'sha512-256'){res.status(200).send(enc.getSHA512_256(text.value));} if(method === 'md5-sha1'){res.status(200).send(enc.getMD5_SHA1(text.value));} else {res.status(200).send(enc.getSHA1(text.value));};
    console.log('完成加密');
});

app.post('/base64',function(req,res){
    var text = req.body;
    res.status(200).send(enc.getBase64(text.value));
    console.log('完成加密');
});

app.post('/hmac/:m',function(req,res){
    var text = req.body;
    var method = req.params.m;
    if(method === 'sha'){res.status(200).send(enc.getHMAC_sha(text.value , text.secret));} else {res.status(200).send(enc.getHMAC_md5(text.value , text.secret));}
    console.log('完成加密');
});

app.listen(port, () => console.log(`StrangeApi is Running on port ${port}!`));