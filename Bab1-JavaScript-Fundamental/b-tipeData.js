/* 
example code data type undefined
*/
let d;
console.log(d);
// check tipe data dengan menggunakan fungsi typeof()
console.log(typeof(d));


/* 
example code data type numbers
*/
let a = 20;
let b = 2.5;
console.log(b);
console.log(a);
// check tipe data dengan menggunakan fungsi typeof()
console.log(typeof(a));


// example code Operator increment and decrement
let inc = 8;
console.log(inc++);
console.log(inc);

let increment = 7;
console.log(++increment);
console.log(increment);


/* 
example code data type BigInt
*/
const bigNumber = 12132332423422222222222223423432423423423412323n;
const bigIntButSmall = 7n;
const typeInt = 2321321736721356221785218362138213333333333333333333;

console.log(`data type Bigint ==> ${bigNumber}`);
console.log(`data type Bigint di isi dengan nilai kecil ==> ${bigIntButSmall}`);

console.log(`data type number ==> ${typeInt} `);

/* 
example code data type string
*/
let name = "mamang";

console.log(`hallo ${name}`)                 //`hallo ${name}` =  string interpolation.
console.log(typeof(name));

//string dengan 2 tanda petik
const jawab = '"I think it\'s awesome!" he answered confidently';
console.log(jawab);


/* 
example code data type Boolean
*/
let x = true;
let z = false;

console.log(typeof(x));
console.log(typeof(z));

// bool dengan operator komparasi
const nilai1 = 20
const nilai2 = 25

let lebihDari = nilai1 > nilai2;
let kurangDari = nilai1 < nilai2;

console.log(lebihDari);
console.log(kurangDari);


/* 
example code data type null
*/


let dataNull = null;
console.log(dataNull);


/* 
example code data type symbol
*/

const id = Symbol("id");
console.log(id);