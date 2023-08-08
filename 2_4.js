/* function sayHello(name = "someone") {
    return `Hello, ${name}!`;
}

console.log(sayHello("Dasha"));
console.log(sayHello()); */

let sayHello = name => {
    if (name == undefined) name = "someone";
    return `Hello, ${name}!`;
}

console.log(sayHello("Dasha"));
console.log(sayHello()); 
