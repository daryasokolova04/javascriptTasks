function isPerfectNumber(number) {
    var res = 0;
    for (var i = 0; i < number; i++) {
        if (number % i == 0) res += i;
    }
    if (number == res) return true;
    return false;
  }
  
  console.log(isPerfectNumber(6));   // true
  console.log(isPerfectNumber(28));  // true
  console.log(isPerfectNumber(12));  // false
  console.log(isPerfectNumber(16));  // false
