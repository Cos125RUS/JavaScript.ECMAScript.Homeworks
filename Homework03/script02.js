class Order {
    #orderNumber;
    #products;

    constructor(orderNumber) {
        this.#orderNumber = orderNumber;
        this.#products = new Array();
    }

    addProduct = (product) => {
        this.#products.push(product);
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.#products.forEach((product) => totalPrice += product.price);
        return totalPrice;
    }
}

class Product {
    #name;
    #price;

    constructor(name, price) {
        this.#name = name;
        if (price < 0) {
            throw new Error('Invalid price');
        }
        this.#price = price;
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get price() { return this.#price; }
    set price(value) { this.#price = value; }
}



const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); 