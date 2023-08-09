function isPrimeNumber(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

console.log(isPrimeNumber(13));
console.log(isPrimeNumber(50));
console.log(isPrimeNumber(97));
