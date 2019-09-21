const fs = require('fs');
const path = require('path');

const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

const fakeDb = require('./fakeDB');


app.get('/product/types', function (req, res) {

    res.send([
        {id: '111', name: '推荐', bgColor: 'red'},
        {id: '222', name: '手机', bgColor: 'blue'},
        {id: '3333', name: '智能', bgColor: 'blue'},
        {id: '4444', name: '电视', bgColor: 'blue'},
        {id: '555', name: '笔记本', bgColor: 'blue'},
        {id: '666', name: '家电', bgColor: 'blue'},
        {id: '777', name: '生活周边', bgColor: 'blue'},
    ])
});

app.get('/product/list', function (req, res) {
    res.send(fakeDb.goods[req.query.typeid])
})


app.listen(5000);
