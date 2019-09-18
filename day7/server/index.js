const fs = require('fs');
const path = require('path');

const express = require('express');
// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

const products = {
    '111': {
        name: '酵素梅',
        price: 776,
        pic: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01WGLTAb28vIi0eJ8iD_!!725677994-0-sm.jpg_60x60q90.jpg',
        desc: `【2盒装】姿美堂酵素粉水果果蔬台湾水果果蔬发酵非酵素梅 40袋 多盒装 更划算，肠净腰细不长膘, 送货范围仅限汕头、云浮、汕尾、揭阳、中山、珠海、东莞、梅州、茂名、清远、广州、湛江、惠州、深圳、佛山、阳江、河源、肇庆、韶关、江门、潮州地区(生鲜类别仅限部分地区)

支付方式
检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。`
    },
    '222': {
        name: '福临门',
        price: 76,
        pic: 'https://img.alicdn.com/imgextra/i3/725677994/O1CN012BPxay28vIh00Nybt_!!725677994.jpg_60x60q90.jpg',
        desc: `福临门 葵花籽清香食用植物调和油 5L/桶 健康食用油 送货范围仅限汕头、云浮、汕尾、揭阳、中山、珠海、东莞、梅州、茂名、清远、广州、湛江、惠州、深圳、佛山、阳江、河源、肇庆、韶关、江门、潮州地区(生鲜类别仅限部分地区)

支付方式 
检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。`
    }
}

app.get('/product/list', function (req, res) {

    setTimeout(function () {
        res.send([
            {id: '111', name: '酵素梅', price: 776, pic: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01WGLTAb28vIi0eJ8iD_!!725677994-0-sm.jpg_60x60q90.jpg'},
            {id: '222', name: '福临门', price: 76, pic: 'https://img.alicdn.com/imgextra/i3/725677994/O1CN012BPxay28vIh00Nybt_!!725677994.jpg_60x60q90.jpg'},
        ])
    }, 1000)
});

app.get('/product/detail', function (req, res) {
    setTimeout(() => {
        let ret = {};
        if (req.query.pid in products) {
            ret.status = 10000;
            ret.msg = '成功获取数据';
            ret.product_detail = products[req.query.pid];
        } else {
            ret.status = 10001;
            ret.msg = '没有数据'
        }
        res.send(ret);
    }, 3000);


});

app.listen(5000);
