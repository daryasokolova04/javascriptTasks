function generateGoogleString(num) {
    if (num < 2) return "Google";
    return 'G' + new Array(num + 1).join('o') + 'gle'
}


console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google
