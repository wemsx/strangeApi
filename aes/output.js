
const key = "37725295ea78b626";
const iv = "efcf77768be478cb";


const src = "hello, my name is wenzi! my password is `etu^&&*(^123)`";
const sign = encode(src, key, iv);
const _src = decode(sign, key, iv);


console.log("key: ", key, "iv: ", iv);
console.log("原文：", src);
console.log("加密后: ", sign);
console.log("解密后: ", _src);