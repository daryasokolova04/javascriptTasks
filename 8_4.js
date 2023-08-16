class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
    }

    makeSound() {
        console.log('sound');
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    sayInfo() {
        console.log(`${this.name}'s favorite food is ${this.favoriteFood}`);
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Gav!")
    }
}

class Cat extends Animal {

    makeSound() {
        console.log('Meow');
    }
}


const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Gav!

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish
