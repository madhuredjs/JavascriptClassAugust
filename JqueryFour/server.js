/**
 * Created by MADHUKAR on 8/24/2014.
 */
/**
 * Created by X122135 on 5/8/2014.
 */
var express = require('express');
var http = require('http');
var app = express();
app.set( 'port', 9200 );
app.use(express.static(__dirname + '/'));
http.createServer(app).listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});

app.route('/GetCustomers')
    .get(function(req, res, next) {
        // do stuff




        res.json({

            DurationMillis: "339",
            ErrorCode: null,
            Status: '200'
        });



    });

