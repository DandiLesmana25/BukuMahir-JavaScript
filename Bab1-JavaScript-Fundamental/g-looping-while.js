console.log('=========== while    ========');
// menampilkan angka 1 sampai 20
let i = 1;

while ( i<= 20) {
    console.log(i);
    i++;
}


console.log('=====================================')
// while dengan validasi kondisi di awal perulangan untuk menghentikan perulangan

let c = 0;

while(c < 10) {
    if (c === 5) {
        break;
    }

    console.log(c);
    c++;
}


console.log('=====================================')
// perulangan while dengan array yang berisi string dalam JavaScript

let motor = ['vespa', 'klx', 'supra baday', 'beat', 'aerok', 'scoopy', 'rx king'];
let index = 0;

while (index < motor.length) {
    console.log(motor[index]);
    index++;
}


console.log('===================================================')
// while  untuk mengambil hanya 5 data dalam array

let  product = ['baju', 'celana', 'topi', 'charger', 'terminal', 'sisir', 'lemari'];
let indexs = 0;
let count= 0;



while (count < 4 && indexs < product.length){
    console.log(product[indexs]);
    count++;
    indexs++;
}

