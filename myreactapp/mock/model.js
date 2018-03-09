const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('1243');
});

// 创建一个model，相当于一个表
const users = mongoose.model('users', new mongoose.Schema({
    'name': {type: String, require: true},
    'age': {type: Number, require: true}
}));

module.exports = users;