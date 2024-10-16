const readline = require('readline');
var storage = [];
var shopping_cart = [];

class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    print() {
        console.log("Name of Product: " + this.name);
        console.log("Price of Product: " + this.price);
        console.log("Quantity of Product: " + this.quantity);
        console.log("---------------------------------------------");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var prod1 = new Product("fish", 5, 20);
var prod2 = new Product("soup", 15, 10);
var prod3 = new Product("chips", 20, 30);

storage.push(prod1);
storage.push(prod2);
storage.push(prod3);

function menu() {
    console.log("--------------------------------------------------");
    console.log("|                    MENU                        |");
    console.log("|------------------------------------------------|");
    console.log("| 1.) Add to Cart (Press A)                      |");
    console.log("| 2.) View Cart (Press V)                        |");
    console.log("| 3.) Pay for Items (Press P)                    |");
    console.log("| 4.) Quit (Press Q)                             |");
    console.log("|------------------------------------------------|");
}

function addToCart() {
    rl.question('Enter the product name: ', (name) => {
        rl.question('Enter the quantity: ', (quantity) => {
            rl.question('Enter the price: ', (price) => {
                let product = new Product(name, parseInt(quantity), parseFloat(price));
                shopping_cart.push(product);
                console.log(`Product "${name}" added to the cart.`);
                menuOptions();
            });
        });
    });
}

function viewCart() {
    if (shopping_cart.length === 0) {
        console.log("Cart is empty");
    } else {
        console.log("\nShopping Cart:");
        shopping_cart.forEach(product => product.print());
    }
    menuOptions();
}

function menuOptions() {
    menu();
    rl.question('\nEnter your choice: ', (choice) => {
        switch (choice.toUpperCase()) {
            case 'A':
                addToCart();
                break;
            case 'V':
                viewCart();
                break;
            case 'P':
                payForItems();
                break;
            case 'Q':
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                menuOptions();
                break;
        }
    });
}

menuOptions();
