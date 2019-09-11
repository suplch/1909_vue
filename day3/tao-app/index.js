const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('listening on 3000');
});
