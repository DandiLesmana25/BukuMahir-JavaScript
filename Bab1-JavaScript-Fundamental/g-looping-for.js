console.log('========== For loop =============')
// mencetak angka dari 1 hingga 10:

for(let i=1; i<=10; i++) {
    console.log(i);
}

console.log('==================================')
//for untuk mengiterasi melalui elemen-elemen dalam sebuah array
const fruits = ['apple', 'banana', 'orange','durian', 'markisa'];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

console.log('==================================')
//for untuk mengiterasi melalui elemen-elemen dalam sebuah array dengan hanya mengambil 4 data dalam array saja

const mobil= ['avanza', 'wuling', 'fajero','xenia', 'brio','fortuner'];

for(let i=0; i<4; i++){
    console.log(mobil[i]);
}