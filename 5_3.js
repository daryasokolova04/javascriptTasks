function getInitials(name) {
    var arr = name.split(' ');
    var res = ``;
    for (var i = 0; i < arr.length - 1; i++) res += `${arr[i][0]}. `
    res += `${arr[arr.length - 1][0]}.`
    return res;
}

const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials); // "J. D."
