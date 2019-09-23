const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');

const db = require('./test-db');


// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const fakeDb = require('./fakeDB');


app.get('/product/types', function (req, res) {

    res.send([
        {id: '111', name: '推荐', bgColor: 'red'},
        {id: '222', name: '手机', bgColor: 'blue'},
        {id: '333', name: '智能', bgColor: 'blue'},
        {id: '444', name: '电视', bgColor: 'blue'},
        {id: '555', name: '笔记本', bgColor: 'blue'},
        {id: '666', name: '家电', bgColor: 'blue'},
        {id: '777', name: '生活周边', bgColor: 'blue'},
    ])
});

app.get('/product/list', function (req, res) {
    res.send(fakeDb.goods[req.query.typeid])
});

app.get('/product/detail', function (req, res) {

    res.send(fakeDb.goods_detail[req.query.pid]);
});

const codeMap = new Map();

app.post('/user/sendVerifyCode', function (req, res) {
    let phone = req.body.phone;
    let code = Math.floor(Math.random() * 9000) + 1000;

    codeMap.set(phone, String(code));
    console.log(phone, code);

    res.send({
        ok: true
    })
});

app.post('/user/loginByCode', async function (req, res) {

    console.log(req.body);

    console.log(codeMap);

    let code = codeMap.get(req.body.phone);
    if (code === req.body.code) {

        if (!await db.existUser(req.body.phone)) {
            let ret = await db.createUser({login_name: req.body.phone});
            console.log(ret);
        }

        let user = await db.getUserByPhone(req.body.phone);
        console.log(user);
        let token = jwt.sign(user, 'abc');

        res.cookie('token', token);

        res.send({
            ok: true
        })
    } else {
        res.send({
            ok: false
        })
    }

});

app.post('/order/create', async function (req, res) {


    console.log(req.cookies.token);

    let user =  jwt.verify(req.cookies.token, 'abc');

    console.log(user);

    const order = req.body;
    order.state = 'unpay';
    order.user_id = user._id;

    let ret = await db.createOrder(order);

    res.send(ret)

});

app.post('/order/pay', function (req, res) {

    let user =  jwt.verify(req.cookies.token, 'abc');
    console.log(user);

    req.body.order_id;




});

app.listen(5000);
