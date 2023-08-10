function countVowels(str) {
    var newStr = str.toLowerCase();
    const vowels = 'aeiouyауоыэяюёие'
    var res = 0;
    for (var i = 0; i < newStr.length; i++) {
        if (vowels.includes(newStr[i])) res += 1;
    }
    return res;
}

const str = "Hello, Привет!";
console.log(countVowels(str)); // 4
