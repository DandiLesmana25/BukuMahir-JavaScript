console.log('===================================');
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log('============tanpa spread=======================');
console.log(favorites);

console.log('============dengan spread=======================');
console.log(...favorites);


console.log('====================================')
console.log('====================================')
// menggabungkan 2 array

const motorHonda = ["scoopy", "beat", "vespa", "cbr"];
const motorYamaha = ["wr", "fino", "vixion"];

const motor = [...motorHonda, ...motorYamaha];

console.log(motor);

console.log('====================================')
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);


console.log('===================================');
console.log('===========menggabungkan property di objek==============');
const obj1 = { name: "John", age: 30 };
const obj2 = { address: "New York", profession: "Developer" };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); 

console.log('===================================');
const objek1 = { firstName: 'Obi-Wan', age: 30 };
const objek2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...objek1, ...objek2 };

console.log(newObj);
