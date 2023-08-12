function calculateAge(birthDate) {
    let now = new Date();
    let date = new Date(Date.parse(birthDate));
    return now.getFullYear() - date.getFullYear()
}


const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age);

