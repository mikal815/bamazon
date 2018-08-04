var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('easy-table');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

connection.connect();