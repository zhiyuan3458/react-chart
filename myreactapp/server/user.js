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
    console.log(req);
    //users.create();
});

module.exports = router;