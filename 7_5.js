function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) return true;
        }
        return false;
    }
    return true;
}

console.log(isLeapYear(800)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
