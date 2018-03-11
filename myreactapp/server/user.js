const express = require('express');
const router = express.Router();
const users = require('../mock/model');

router.get('/info', function(req, res) {
    users.find({}, function (err, doc) {
        if(!err) {
            return res.json({code: 0,data: doc});
        }else {
            console.log(err);
        }
    });
});

router.post('/register', function(req, res) {
    const {name, password, type} = req.body;
    users.findOne({name}, function (err, doc) {
        if(doc) {
            return res.json({code: 1, msg: '用户名重复！'});
        }
        users.create({name, password, type},function(err,doc) {
           if(!err) {
               res.json({code: 0,msg: ''});
           } else {
               res.json({code: 1, msg: '后台出错！'});
           }
        });
    });

});

module.exports = router;