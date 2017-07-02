var express = require('express');
var fs = require('fs');
var request = require('request');
var router = express.Router();
var cheerio = require('cheerio');

var url = "http://wiki.hacman.org.uk/Snackspace";
var tablesOfInterest = ["Drinks", "Food"];

/* GET home page. */
router.get('/', function(req, res, next) {

    //load page
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            $('.wikitable').filter(function(){
                var data = $(this);
                var title = data.children().first().text();

                if(tablesOfInterest.indexOf(title) !== false){

                    data.each(function(index, row){
                        console.log(row.children().first().text());
                    })
                }

                //release = data.children().last().children().text();
            });


            res.render('index', { title: 'Express' });
        }
    })



    //find tasble

    //get headers

    //get items and prices



});



module.exports = router;
