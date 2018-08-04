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

function menuOptions(){
    inquirer.prompt([{
              type: 'list',
              name: 'selectOption',
              message: 'Manager view: Please select from the following options:',
              choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
          }]).then(function(answers) {
              switch(answers.selectOption) {
                  case "View Products for Sale":
                      viewProducts();
                      break;
                  case "View Low Inventory":
                      viewLowInv();
                      break;
                  case "Add to Inventory":
                      addToInv();
                      break;
                  case "Add New Product":
                      addNewProduct();
                      break;
                  case "Exit":
                      exit();
                      break;
              }
          });
  }

  

function exit() {
	console.log("Goodbye")
    connection.end();
}

menuOptions(); 