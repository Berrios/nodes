var app = 5;
var mylib = require('./library/mylib')(app);

console.log(mylib.sum(3,5));
var p = new mylib.Person("Michael");
console.log('P', p);
console.log('starting app.js');
