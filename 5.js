console.log(10 == 10) //true, числа равны

console.log(10 != 10) //false, числа равны

console.log(12 == 'Привет') //false, типы различны

console.log(10 < 11) //true

console.log(12 > 20) //false

console.log(true && true) //true, тк оба true

console.log(true && false) //false, тк хотя бы один false

console.log(false && true) //false, тк хотя бы один false

console.log(false || true) //true, тк хотя бы один true

console.log(true || false) //true, тк хотя бы один true

console.log(true || true) //true, тк хотя бы один true

console.log(10 <= 10) //true

console.log(18 <= 20) //true

console.log(50 >= 50) //true

console.log(51 >= 50) //true

console.log({} === {}) //у объектов разные ссылки => они не равны

console.log({} == {}) //у объектов разные ссылки => они не равны

const a = {};
const b = a;
console.log(a === b); //ссылка копируется, объекты равны
