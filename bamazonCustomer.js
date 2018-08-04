var mysql = require('mysql'); // node.js driver for mysql
var inquirer = require('inquirer'); // Used for prompts on the command line
var Table = require('easy-table'); // This renders the table nicely in the terminal


var connection = mysql.createConnection({  // Connects to the MySQL database
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'bamazon'
});

connection.connect();

displayTable();

function displayTable() {
    connection.query("SELECT * FROM products", function(error, results) {

        if (error) throw error;
        console.log("\n\n");

        console.log(`Welcome to Bamazon Musical Instruments!`)
        console.log(``)

        // The following block of code utilizes the "easy-table" package with it's variables, methods and functions
         var t = new Table; 

        // Displays the table found in the MySQL database
        results.forEach(function(item) {
        	t.cell('ID', item.id);
        	t.cell('Product', item.product_name);
        	t.cell('Department', item.department_name);
        	t.cell('Price', item.price, Table.number(2));
        	t.cell('Quantity', item.stock_quantity)
        	t.newRow();  //Pushes the current row to the table and starts a new one


        });

        console.log(t.toString()); // Formats the table



        
    });
}



function exitProgram() {
    connection.end();
}