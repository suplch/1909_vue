const fs = require('fs');
const path = require('path');

const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

const db = [
    {id: '111', name: '苹果', price: 123, pic: ''},
    {id: '222', name: '香蕉', price: 33, pic: '🍌'},
    {id: '333', name: '橘子', price: 123, pic: '🍊'},
    {id: '444', name: '栗子', price: 33, pic: '🌰'},
    {id: '555', name: '西瓜', price: 34, pic: '🍉'},
    {id: '666', name: '菠萝', price: 123, pic: '🍍'},
    {id: '777', name: '葡萄', price: 34, pic: '🍇'},
    {id: '888', name: '哈密瓜', price: 123, pic: '🍈'},
    {id: '999', name: '番茄', price: 123, pic: '🍅'},
]



app.get('/product/more', function (req, res) {

    let pageNo = Number(req.query.pageNo) - 1;
    let pageSize = Number(req.query.pageSize);

    let start = pageNo * pageSize;

    let ret = db.slice(start, start + pageSize)

    setTimeout(() => {
        res.send(ret);
    }, 2000);



});

app.listen(5000);
