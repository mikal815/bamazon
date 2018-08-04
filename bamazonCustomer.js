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
    connection.query("SELECT * FROM products", function (error, results) {

        if (error) throw error;
        console.log("\n\n");

        console.log(`Welcome to Bamazon Musical Instruments!`)
        console.log(``)

        // The following block of code utilizes the "easy-table" package with it's variables, methods and functions
        var t = new Table;

        // Displays the table found in the MySQL database
        results.forEach(function (item) {
            t.cell('ID', item.id);
            t.cell('Product', item.product_name);
            t.cell('Department', item.department_name);
            t.cell('Price', item.price, Table.number(2));
            t.cell('Quantity', item.stock_quantity)
            t.newRow();  //Pushes the current row to the table and starts a new one


        });

        console.log(t.toString()); // Formats the table



        // The following block of code utilizes the Inquirer package for user prompts
        inquirer.prompt([{
            type: 'input',
            name: 'id',
            message: 'What is the ID of the product you would like to buy?'
        }, {
            type: 'input',
            name: 'quantity',
            message: 'How many of this product would you like to buy?'

        }]).then(function (answers) {

            connection.query("SELECT * FROM products WHERE id = " + answers.id, function (error, results) {

                var currentPrice = results[0].price;
                var total = (answers.quantity * currentPrice).toFixed(2)


                if (results[0].stock_quantity < answers.quantity) {
                    console.log("\n\n\n\n\n")
                    console.log("Insufficient quantity!");
                    displayTable();
                } else {
                    connection.query("UPDATE products SET stock_quantity = stock_quantity - " + answers.quantity + " WHERE id = " + answers.id, function (error, results) {

                        console.log("Inventory Updated!");
                        console.log("Your total is: $" + total);
                        console.log("Thanks for shopping at Bamazon Musical Instruments!");
                    });
                    connection.query("UPDATE departments INNER JOIN products ON products.department_name = departments.department_name SET departments.product_sales = departments.product_sales + ? WHERE products.id = ?", [total, answers.id], function (error, results) {
                        console.log("Department updated");
                        exitProgram();
                    });


                }
                if (error) throw error;


            })
        });
    });
}



function exitProgram() {
    connection.end();
}