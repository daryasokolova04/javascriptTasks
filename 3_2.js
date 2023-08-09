function sum(array) {
    let res = 0;
    for (var i = 0; i < array.length; i++) res += array[i];
    console.log(res);
  }
  
  const arr = [1, 50, 20, 75, 90];
  
  /* var res = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  console.log(res); */

  sum(arr); // 236

