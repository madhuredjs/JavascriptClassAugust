var express = require('express');
var http = require('http');
var app = express();
app.set( 'port', 9200 );
app.use(express.static(__dirname + '/'));

http.createServer(app).listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});

//app.set("jsonp callback", true);


app.route('/GetEmployees')
    .get(function(req, res, next) {
        // do stuff
        res.json({
            Data: {
              EmployeeList : [
                  {
                      "name" : "Chandra",
                      "title": "Senior Developer",
                      "city" : "New York"
                  },
                  {
                      "name" : "Madhu",
                      "title": "Senior Developer",
                      "city" : "Kansas City"

                  },
                  {
                      "name" : "Kiran",
                      "title": "Senior Developer",
                      "city" : "San Fransisco"

                  },
                  {
                      "name" : "Subash",
                      "title": "Senior Developer",
                      "city" : "Dallas"

                  },
                  {
                      "name" : "Prasad",
                      "title": "Senior Developer",
                      "city" : "Houston"

                  },
                  {
                      "name" : "Arun",
                      "title": "Senior Developer",
                      "city" : "Jersy City"

                  },
                  {
                      "name" : "Venu",
                      "title": "Senior Developer",
                      "city" : "Lawrence"

                  },
                  {
                      "name" : "Ramesh",
                      "title": "Senior Developer",
                      "city" : "San Antonio"

                  },
                  {
                      "name" : "Jayanth",
                      "title": "Senior Developer",
                      "city" : "Pittsburgh"

                  }



              ]

            },
            DurationMillis: "339",
            ErrorCode: null,
            Status: '200'
        });



    });

