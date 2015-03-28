var mysql = require('mysql');
//create database connection
var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'contact_box_development',
  port: '8889'
});
//
get_contacts = function (errors, results, fields) {
  results.forEach(function (result) {
    console.log(result.firstname + ' ' + result.lastname + ' ' + result.email);
  });
}
db.query('SELECT * FROM contacts', get_contacts);