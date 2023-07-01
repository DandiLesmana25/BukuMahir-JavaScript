console.log('=======================================');
let buah = ['apple', 'banan', 'orange', 'mango', 'durian' ];

// akses elemen array
console.log(buah[2]);


// Memperbarui nilai elemen dalam array
buah[1] = 'grape';
console.log(buah);

// Menambahkan elemen baru ke array
buah.push('strawbery');
console.log(buah);

buah.pop();
console.log(buah); 

// Menghitung panjang array
console.log(buah.length);


console.log('=======================================');

let myArray = ["programmerss", 25, true, 'mamang coders'];

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[3]);



console.log('=============== ===========================');

const motor = ["beat","vespa", 'scoopy', 'supra', 'klx'];
console.log(motor);

motor.shift();       //mengeluarkan dari elmnt pertama/indek-0
console.log(motor);

motor.unshift("aerok");  //menambahkan ke ke elemnt pertama/index-o
console.log(motor);

// delete data array
// delete motor[3];
// console.log(motor);

motor.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(motor);



