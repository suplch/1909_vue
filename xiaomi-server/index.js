const fs = require('fs');
const path = require('path');

const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

app.get('/product/types', function (req, res) {

    res.send([
        {id: '111', name: '推荐'},
        {id: '111', name: '手机'},
        {id: '111', name: '智能'},
        {id: '111', name: '电视'},
        {id: '111', name: '笔记本'},
        {id: '111', name: '家电'},
        {id: '111', name: '生活周边'},
    ])
});


app.listen(5000);
