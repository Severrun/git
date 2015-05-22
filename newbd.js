var mysql = require('mysql');
var connection = mysql.createConnection({ host: 'localhost', user: 'root', password:'1234'});
connection.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected');
    }
});
