
// node.js 환경
var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: '****',
  password: '****',
  database: 'test',

});

var server = http.createServer(app).listen(800);
connection.connect();

console.log("hello nodejs");


app.get('/test', function(req, res) {

  res.send('hello world Noh~22222fefefefddddde');
});


connection.query('select * from member2',
  function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
  });


app.get('/cssPractice', function (req,res) {
  res.sendfile('pra1css.html');
});



app.get('/getAllMember2', function (req, res){
  connection.query('select * from member2', function (err, rows, fields){
    if(err) throw err;
    console.log(fields);
    res.send(rows);
    }
  );
});



app.get('/getAuthcode1or2', function(req, res) {
  connection.query('select * from member where authcode = 1 or authcode = 2', function (err, rows, fields){
    if(err) throw err;
    res.send(rows);
  });
});



app.get('/getNameFromBoard', function(req, res) {
  connection.query('select name from member A where A.id in (select B.id from board B)', function(err, rows, fields) {
    if(err) throw(err);
    res.send(rows);
  });
});



app.get('/getEmailOfAdmin', function(req, res) {
  connection.query('select email from member A where A.authcode in (select B.authcode from auth B where B.authority = "관리자")', function(err, rows, fields) {
    if(err) throw(err);
    res.send(rows);
  });
} );



app.get('/LongestEmail', function(req, res){
  connection.query('select name from member where length(email) = (select max(length(email)) from member)', function(err, rows, fields){
    if(err) throw(err);
    res.send(rows);
  });
});


app.get('/makeTable', function(req, res){
  connection.query('create table fd222v (name varchar(49), address varchar(28))', function(err, rows, fields) {
    if(err) throw(err);
    res.send(rows);
    console.log("Table created");
  });
});
