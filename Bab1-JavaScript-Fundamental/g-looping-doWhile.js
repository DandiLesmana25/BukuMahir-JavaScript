console.log('======== Do while  ===========');

let i = 0;

do {
    console.log(i);
    i++
} while(i <= 10);


console.log('=======================');
// do...while dengan array dalam JavaScript

const fruits = ['apel', 'mangga', 'jeruk', 'pisang', 'pepaya'];
let index = 0;
count = 0;

do {
    console.log(fruits[index]);
    index++
    count++
} while (count < 3 && index < fruits.length);


