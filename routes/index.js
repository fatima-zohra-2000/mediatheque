var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/alltitles', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('alltitles', {
            "alltitles" : docs
        });
    });
});

module.exports = router;
