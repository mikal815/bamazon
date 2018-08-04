CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(45) NULL,
 department_name VARCHAR(45) NULL,
 price DECIMAL(10,2) NULL,
 stock_quantity INT NULL,
 PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stratocaster", "Guitars", 1200, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Les Paul", "Guitars", 1300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Falcon", "Guitars", 3500, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ludwig drum set", "Drums", 700, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hammond Sk1", "Keyboards", 1900, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Digitech Luxe", "Pedals", 50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Marshall MG50", "Amps", 700, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Peavey Vypyr", "Amps", 500, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Elixir strings", "Strings", 16, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony MDR", "Headphones", 90, 32);

