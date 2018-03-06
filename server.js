// подключение express
var express = require("express");
// создаем объект приложения
var app = express();

var path = require('path');
// определяем обработчик для маршрута "/"


app.route('\*').get(function (req, res) {
    let str = req.url.split('.');

    if (str.length > 1) {
        console.log("IS FILE");
        res.sendFile(path.join(__dirname, req.url));
    }
    else {
        console.log("is path: " + req.url);
        res.sendFile(path.join(__dirname, '\index.html'));
    }



});

// начинаем прослушивать подключения на 3000 порту

console.log("Сервер стартовал на порту 80, 192.168.0.103:80");
app.listen(80);

