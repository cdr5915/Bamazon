var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql1",
    database: "bamazonDB"
});

connection.connect();

connection.query("SELECT * FROM products", function(err, results) {
  if(err) throw err;
});

var role = [
  {
    type: "input",
    name: "id",
    message: "What is the ID of the product you would like to buy?",
  },
  {
    type: "input",
    name: "product",
    message: "How many are you going to buy?"
  }
];
var collection;

var listItems = function (){
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    collection = results;
    results.map(function(el){
      console.log("Item Id: " + el.item_id + "  Item Name:" + el.product_name + "  Item Price:" +el.price);
    });
  });
};

listItems();

var updateInventory = function(quantity, id) {
  connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [quantity, id], function(err, data){
    if (err) throw err;
    console.log("Process Complete");
  });
}

setTimeout(function() {
inquirer.prompt(role)
.then(function(data){
  var msg = {};
  collection.map(function (val){

    if(Number(data.id) === val.item_id){
      if (Number(data.product) > val.stock_quantity){
        msg.result = "Insufficient quantitiy";
      }
      else{
      msg.price = val.price * Number(data.product);
      msg.inventory = val.stock_quantity - Number(data.product);
      updateInventory(msg.inventory, data.id);
      }
    }
  });
  return msg;
})
.then(function(data){
  console.log("Your total is " + data.price);
})

}, 2000);
