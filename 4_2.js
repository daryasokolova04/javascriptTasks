function func(num, min, max) {
    if (num < min) return min ** 2;
    if (num > max) return max ** 2;
    if (num < max - (max - min) / 2) return num ** 2;
    return Math.floor(num);

}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8
