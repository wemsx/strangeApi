const crypto = require('crypto');

exports.encode = function(src, key, iv) {
    let sign = "";
    const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
    sign += cipher.update(src, "utf8", "hex");
    sign += cipher.final("hex");
    return sign;
};

exports.decode = function(sign, key, iv) {
    let src = "";
    const cipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
    src += cipher.update(sign, "hex", "utf8");
    src += cipher.final("utf8");
    return src;
}