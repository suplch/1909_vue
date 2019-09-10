const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get('/student/get_student_list', function (req, res) {

    res.send([
        {name: '小张', age: 18, sex: '男', score: 100},
        {name: '小李', age: 18, sex: '女', score: 90},
        {name: '小赵', age: 18, sex: '男', score: 89}
    ]);
});


app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('listening on 3000');
});
