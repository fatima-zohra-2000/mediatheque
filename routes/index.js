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

/* GET titles with [1,10] range (page). */
router.get('/titles1categ', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('titles1categ', {
            "titles1categ" : docs
        });
    });
});

/* GET authors with titles starting with N (page). */
router.get('/titles2categ', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('titles2categ', {
            "titles2categ" : docs
        });
    });
});

/* GET Ranked movies page. */
router.get('/lettertitles', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({},{},function(e,docs){
        res.render('lettertitles', {
            "lettertitles" : docs
        });
    });
});

/* GET documents that don't have "type_de_document" field (page). */
router.get('/titles3categ', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({ 'fields.type_de_document': {$exists: false} },function(e,docs){
        res.render('titles3categ', {
            "titles3categ" : docs
        });
    });
});

/* GET document type page. */
router.get('/titles4categ', function(req, res) {
    var db = req.db;
    var collection = db.get('mediatheque'); //notre collection est mediatheque
    collection.find({ 'fields.type_de_document': {$exists: true} },function(e,docs){
        res.render('titles4categ', {
            "titles4categ" : docs
        });
    });
});

module.exports = router;
