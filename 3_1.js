function info(person) {
    return `Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`
}


incrementAge = person => person.age += 1;

/* function incrementAge(person) {
    person.age += 1;
} */

john = {
    name: "John",
    age: 20,
    pet: "dog"
}

ann = {
    name: "Ann",
    age: 15,
    pet: "cat"
}

console.log(info(ann));
incrementAge(ann);
console.log(info(ann));

for (key in john) {
    console.log(key, john[key]);
}
