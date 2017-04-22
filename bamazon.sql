CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (45) NOT NULL,
    department_name VARCHAR (45) NOT NULL,
    price DECIMAL(10, 4) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Womens Clothing", 25, 12), ("Tank", "Womens Clothing", 12, 12), ("Shorts", "Womens Clothing", 19, 12), ("Polo", "Mens Clothing", 20, 12),
				("Khakis", "Mens Clothing", 30, 12), ("Jacket", "Mens Clothing", 35, 12), ("Dress", "Girls Clothing", 15, 12), ("Overalls", "Girls Clothing", 20, 12), ("Jeans", "Boys Clothing", 15, 12), ("Jersey", "Boys Clothing", 20, 12);