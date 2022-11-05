const crypto = require('crypto');
//const salt = process.env.SALT;
const salt = '9bmbNMp6Fl95utS1RucFhA==';

//MD5算法
exports.getMD5 = function(str , safe){
    //自己利用node自带的crypto模块封装出来的md5加密函数，传入初始密码，返回加密后密码
	var md5 = crypto.createHash('md5');//创建哈希加密算法，后边可以是md5，sha1,sha256等
    if(safe == true){
        var result = md5.update(str+salt).digest('base64');
    } else{	var result = md5.update(str).digest('base64'); };
	return result;
};

//MD4算法
exports.getMD4 = function(str , safe){
    //自己利用node自带的crypto模块封装出来的md5加密函数，传入初始密码，返回加密后密码
	var md4 = crypto.createHash('md4');//创建哈希加密算法，后边可以是md5，sha1,sha256等
    if(safe == true){
        var result = md4.update(str+salt).digest('base64');
    } else{	var result = md4.update(str).digest('base64'); };
	return result;
};
//md5-sha1算法
exports.getMD5_SHA1 = function(str , safe){
	var md5_sha1 = crypto.createHash('md5-sha1');
    if(safe == true){
        var result = md5_sha1.update(str+salt).digest('base64');
    } else{	var result = md5_sha1.update(str).digest('base64'); };
	return result;
};
//MDC2算法
exports.getMDC2 = function(str , safe){
	var mdc2 = crypto.createHash('mdc2');
    if(safe == true){
        var result = mdc2.update(str+salt).digest('base64');
    } else{	var result = mdc2.update(str).digest('base64'); };
	return result;
};
//
//
//
//                  SHA-1
//
//
//

//SHA1算法
exports.getSHA1 = function(str , safe){
	var sha1 = crypto.createHash('sha1');
    if(safe == true){
        var result = sha1.update(str+salt).digest('base64');
    } else{		var result = sha1.update(str).digest('base64'); };
	return result;
};

//
//
//
//                  SHA-2
//
//
//

//SHA224算法
exports.getSHA224 = function(str , safe){
	var sha224 = crypto.createHash('sha224');
    if(safe == true){
        var result = sha224.update(str+salt).digest('base64');
    } else{		var result = sha224.update(str).digest('base64'); };
	return result;
};

//SHA256算法
exports.getSHA256 = function(str , safe){
	var sha256 = crypto.createHash('sha256');
    if(safe == true){
        var result = sha256.update(str+salt).digest('base64');
    } else{		var result = sha256.update(str).digest('base64'); };
	return result;
};

//SHA512算法
exports.getSHA512 = function(str){
	var sha512 = crypto.createHash('sha512');
    var result = sha512.update(str).digest('base64'); 
	return result;
};

//
//
//
//                  SHA-3
//
//
//

//SHA3-224算法
exports.getSHA3_224 = function(str){
	var sha224 = crypto.createHash('sha3-224');
    var result = sha224.update(str).digest('base64'); 
	return result;
};

//SHA3-256算法
exports.getSHA3_256 = function(str){
	var sha256 = crypto.createHash('sha3-256');
    var result = sha256.update(str).digest('base64'); 
	return result;
};

//SHA3_512算法
exports.getSHA3_512 = function(str){
	var sha512 = crypto.createHash('sha3-512');
    var result = sha512.update(str).digest('base64');
	return result;
};

//
//
//
//                  更多SHA算法
//
//
//

//SHA512_224算法
exports.getSHA512_224 = function(str){
	var sha224 = crypto.createHash('sha512-224');
    var result = sha224.update(str).digest('base64');
	return result;
};

//SHA512_256算法
exports.getSHA512_256 = function(str){
	var sha256 = crypto.createHash('sha512-256');
    var result = sha256.update(str).digest('base64');
	return result;
};

//
//
//
//                  其他算法
//
//
//

//Base64算法
exports.getBase64 = function(str){
    var buff = Buffer.from(str, 'utf-8');
    var base64 = buff.toString('base64');
    return base64;
};

//Hmac算法
exports.getHMAC = function(str , secret){
    var hash = crypto.createHmac('sha256', secret).update(str).digest('hex');
    return hash;
};

//ripemd
exports.getripemd = function(str){
	var ripemd = crypto.createHash('ripemd');
    var result = ripemd.update(str).digest('base64');
    return result;
};

//sm3
exports.getsm3 = function(str){
	var sm3 = crypto.createHash('sm3');
    var result = sm3.update(str).digest('base64');
    return result;
};

//whirlpool
exports.getwhirlpool = function(str){
	var whirlpool = crypto.createHash('whirlpool');
    var result = whirlpool.update(str).digest('base64');
    return result;
};