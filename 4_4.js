function getNumberDigit(number, digitPosition) {
    var arr = [];
    while (number >= 1) {
        arr.unshift(number % 10);
        number = (number / 10).toFixed(0);
    }
    return console.log(arr[digitPosition]);
  }

  
  getNumberDigit(123, 0) // 1
  getNumberDigit(123, 1) // 2
  getNumberDigit(123, 2) // 3
  getNumberDigit(1, 2) // undefined
