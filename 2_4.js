/* function sayHello(name = "someone") {
    console.log(`Hello, ${name}!`);
}

sayHello("Dasha");
sayHello(); */

let sayHello = name => {
    if (name == undefined) name = "someone";
    console.log(`Hello, ${name}!`);
}

sayHello("Dasha");
sayHello();
