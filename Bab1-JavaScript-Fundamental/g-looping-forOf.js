console.log('========== For of loop =============')

let name = ['asep', 'udin', 'agus', 'ucup', 'safri', 'kemod']

for (const array of name) {
    console.log(array)
}

console.log('========== contoh 2 =============')

const fruits = ['apple', 'banana', 'durian', 'orange', 'markisa'];

for(let buah of fruits) {
    console.log(buah);
}


console.log('===============================')

// for of untuk mengiterasi melalui string

const message = 'hello';

for (let char of message) {
    console.log(char);
}
console.log(message);

console.log('===============================')
// for...of dengan variabel penghitung untuk mengambil hanya 5 data dalam array:

const dataKota = ['karawang', 'bandung', 'cirebon', 'pemalang', 'bogor', 'bekasi'];
let count = 0;

for (let element of dataKota) {
    if (count >= 4){
        break;
    }

    console.log(element);
    count++;
}