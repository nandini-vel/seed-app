var express = require('express');
let router = new express.Router();

module.exports = router;

// import employeeRouter from './api/employee/employee.router.js';

router.get('/', function(req, res, next) {
  res.send('FLSmidth');
});

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    next(); 
});


// router.use('/employees', employeeRouter);

