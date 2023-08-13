class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    priceWithDiscount(discount) {
        return this.price - this.price / 100 * discount;
    }

}


const product = new Product("Phone", 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800
console.log(product.price); // 1000
