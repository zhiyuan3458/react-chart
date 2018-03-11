const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const DB_URL = "mongodb://localhost:27017";
// mongoose.connect(DB_URL);
// mongoose.connection.on('connected', function () {
//     console.log('1243');
// });

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(cookieParser());


// 用户相关的后台信息
const user =  require('./user');
app.use('/user', user);
// 创建一个model，相当于一个表
// const users = mongoose.model('users', new mongoose.Schema({
//     'name': {type: String, require: true},
//     'age': {type: Number, require: true}
// }));

// 新增一条记录
// users.create({
//     name: 'xiaoxi',
//     age: 16
// }, function (err, doc) {
//     if(!err) {
//         console.log(doc);
//     }else {
//         console.log(err);
//     }
// });

// 删除一条记录
// users.remove({name: 'xiaoxi'}, function (err, doc) {
//     console.log(doc);
// });

// 更新一条记录
// users.update({name: 'xiaohua'},{'$set': {age: 22}}, function (err, doc) {
//     if(!err) {
//         console.log(doc);
//     }else {
//         console.log(err);
//     }
// });

// find   查询记录
// app.use('/data', function (req, res) {
//     users.find({}, function (err, doc) {
//         console.log(doc);
//         return res.json(doc);
//     });
// });

app.listen(9093, function () {
    console.log("hell1");
});