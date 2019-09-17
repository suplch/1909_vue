const fs = require('fs');
const path = require('path');

const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

let basePath = path.join(__dirname, '..', );

app.get('/fs', function (req, res) {
    console.log(basePath + req.query.path)
    const list = fs.readdirSync(basePath + req.query.path);
    const flist = [];
    for (let item of list) {
        let currentPath = basePath + req.query.path;
        let stat = fs.statSync(path.join(currentPath, item));
        flist.push({
            name: item,
            isFolder: stat.isDirectory()
        })
    }
    res.send(flist)

});
app.listen(5000);
