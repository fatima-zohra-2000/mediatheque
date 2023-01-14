var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET alltitles page. */
router.get('/alltitles', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('alltitles', {
            "alltitles" : docs
        });
    });
});

/* GET titles with [1,10] range page. */
router.get('/titles1categ', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('titles1categ', {
            "titles1categ" : docs
        });
    });
});

module.exports = router;
