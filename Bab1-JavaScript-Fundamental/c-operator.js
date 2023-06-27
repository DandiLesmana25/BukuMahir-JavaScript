/* Assignment Operator */
console.log('Assignment operator');


let nilai1 = 4;
let nilai2 = 5;

nilai1 +=nilai2;   // =>>  nilai1 = nilai1 + nilai2. 

console.log(nilai1);

// x += y;  artinya -> x = x + y;
// x -= y;  artinya -> x = x - y;
// x *= y;  artinya -> x = x * y;
// x /= y;  artinya -> x = x / y;
// x %= y;  artinya -> x = x % y;


/* Comparison Operatorr */
console.log('Comparison operator');

let usiaA = 21;
let usiaB = 25;

console.log(usiaA > usiaB);
console.log(usiaA < usiaB );


// different == and ===

let nilaiString = '21';
let nilaiNumber = 21;

console.log('===========================');
console.log(nilaiNumber == nilaiString);
console.log(nilaiNumber === nilaiString);




/* Logical Operator*/
console.log('Logical operator');

let logicalA = 15;
let logicalB = 10;

/* AND operator */
console.log(logicalA < 20 && logicalB >= 10 ) //(true && true) = true
console.log(logicalA > 20 && logicalB >= 10 ) // (false && true) = false

/* OR operator */
console.log(logicalA < 20 || logicalB >= 10 ) //(true or true) = true
console.log(logicalA > 20 || logicalB >= 10 ) // (false or true) = true




/* OR operator */
console.log(!(logicalA < 20));
console.log(logicalB != 15);
console.log(logicalA != 15);
