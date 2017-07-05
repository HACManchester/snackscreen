var express = require('express');
var fs = require('fs');
var request = require('request');
var router = express.Router();
var scraper = require('table-scraper');
var url = "http://wiki.hacman.org.uk/Snackspace";

var tableData = [];

/* GET home page. */
router.get('/', function(req, res, next) {

    //load page
    scraper
        .get(url)
        .then(function(data) {

            tableData = data;
            tableData.forEach(function(table){


            });

            tableData.splice(tableData.length -2, 2);

            res.render('index', { title: 'Express', tableData: tableData });
        });



    //find tasble

    //get headers

    //get items and prices



});

module.exports = router;
