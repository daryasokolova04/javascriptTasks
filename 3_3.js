names = [];

names = names.concat("Вася", "Петя", "Маша", "Даша", "Оля");

console.log(names);

names.splice(0, 1);
names.splice(names.length - 1, 1);

console.log(names);
