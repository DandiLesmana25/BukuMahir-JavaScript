console.log('=======================================');

const person = {
    firstName : "aceng",
    lastName : "fikri",
    age : 21,
    profession: "Developer"
}

console.log(`Halo, nama saya ${person.firstName} ${person.lastName}`);

// console.log(`usia saya ${person.age} tahun`);
console.log(`usia saya ${person["age"]} tahun`);  //mengakses property pakai kurung siku
console.log(person.profession);

console.log('===================================')
// mengubah value dalam object menggunakan assignment operator (=)

const mobil = {
    name : "avanza",
    manufacturing : "toyota",
    maxSpeed: 1900,
    color: 'white'
};

mobil.color = "black";
mobil["name"] = "brio";
delete mobil.maxSpeed;        //menghapus property pada object
mobil.kecepatanMax = 1500;    //menambah property baru

console.log(mobil);

