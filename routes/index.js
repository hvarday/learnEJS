var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sample page. */
router.get('/sample', function(req, res){
    //  second parameter is JavaScript Object, which is sent to the view.
    res.render('sample', {name:"HV", age:20, school:"SCOPE", year:2, courses:["CSE","MAT","FRE","MEE"]});
})

module.exports = router;
