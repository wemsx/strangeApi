const url = require('url');
const express = require('express');
const app = express();
const port = 80;

app.get('/*/**' , function(req , res ){
    var wemsx = url.parse(req.url).search;
    console.log(url.parse(req.url));
    var trimed = wemsx.slice(1)
    res.send(trimed);
});

app.listen(port, () => console.log(`StrangeApi is Running on port ${port}!`));