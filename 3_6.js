const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

var obj2 = obj;
for (key1 in updateObj) {
    for (key2 in obj2) {
        if (key1 == key2) obj2[key2] = updateObj[key1];
    }
}

/* const obj2 = { ...obj, ...updateObj }; */

console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
