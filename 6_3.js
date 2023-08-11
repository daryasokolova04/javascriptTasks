function calculateAverage(mass) {
    if (mass.length == 0) return 0;
    let res = 0;
    for (let i = 0; i < mass.length; i++) {
        res += mass[i];
    }
    return res / mass.length;
}

const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0
