function calc(a, b, operation) {
    if (operation == '+') return a + b;
    if (operation == '-') return a - b;
    if (operation == '*') return a * b;
    if (operation == '/') return a / b;

  }
  
  console.log(calc(1, 2, '+')); // 3
  console.log(calc(1, 2, '-')); // -1
  console.log(calc(2, 2, '*')); // 4
  console.log(calc(4, 2, '/')); // 2
