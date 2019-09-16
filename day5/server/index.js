const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();
app.get('/Product/list', function (req, res) {

    res.send({
        product_list: [
            {name: '苹果', price: 123},
            {name: '香蕉', price: 21},
        ]
    })
});

app.listen(5000);
