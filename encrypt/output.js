const crypto = require('crypto');
const enc = require('./encrypt');
const dec = require('./decrypt');

var ex = 'wemsx';


console.log('SHA1加密结果：'+enc.getSHA1(ex));
console.log('SHA224加密结果：'+enc.getSHA224(ex));
console.log('SHA256加密结果：'+enc.getSHA256(ex));
console.log('SHA512加密结果：'+enc.getSHA512(ex));
console.log('SHA512-224加密结果：'+enc.getSHA512_224(ex));
console.log('SHA512-256加密结果：'+enc.getSHA512_256(ex));
console.log('SHA3-224加密结果：'+enc.getSHA3_224(ex));
console.log('SHA3-256加密结果：'+enc.getSHA3_256(ex));
console.log('SHA3-512加密结果：'+enc.getSHA3_512(ex));
console.log('Hmac以wemsx为密钥的加密结果：'+enc.getHMAC(ex ,ex));
console.log('MD5加密结果：'+enc.getMD5(ex));
console.log('MD4加密结果：'+enc.getMD4(ex));
console.log('mdc2加密结果：'+enc.getMDC2(ex));
console.log('md5-sha1加密结果：'+enc.getMD5_SHA1(ex));
console.log('ripemd加密结果：'+enc.getripemd(ex));
console.log('sm3加密结果：'+enc.getsm3(ex));
console.log('whirlpool加密结果：'+enc.getwhirlpool(ex));