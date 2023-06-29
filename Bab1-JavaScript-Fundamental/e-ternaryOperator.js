console.log('=========================')

const isMember = false;
const discount = isMember ? 0.5 : 0;    // kondisi ? nilaiJikaTrue : nilaiJikaFalse;

console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

console.log('=========================')
console.log('======contoh 2============')


// Memeriksa apakah sebuah bilangan adalah positif atau negatif

// const num = -10;
const num = 10;
const result = num >= 0 ? "bilangan positif" : "bilangan negatif";
console.log(result);


console.log('=========================')
console.log('======contoh 3============')
// Memeriksa apakah sebuah nilai adalah bilangan genap atau ganjil

const value = 8;
const isEven = value % 2 === 0 ? "Bilangan genap" : "Bilangan ganjil";
console.log(isEven);

console.log('=========================')
console.log('======contoh 4============')
  
// Menentukan apakah seorang user/pengguna adalah administrator atau bukan

const userRole = "admin";
const isAdmin = userRole === "admin" ? "user adalah admin" : "user bukan admin";
console.log(isAdmin);


console.log('====== Truthy y ===========')

const salam = "Hello";
if (salam) {
    console.log("salam adalah truthy"); // Output: value3 adalah truthy
  }

console.log('======Falsy ===========')

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}


const value6 = "";
if (!value6) {                 //jika tidak ada valuenya
    console.log("value6 adalah falsy"); // Output: value6 adalah falsy
  }