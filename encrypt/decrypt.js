const crypto = require('crypto')

exports.unBase64 = function(base64){
    var buff = Buffer.from(base64, 'base64');
    var str = buff.toString('utf-8');
    return str;
};