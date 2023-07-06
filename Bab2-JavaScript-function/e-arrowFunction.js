const sayHello = (great= "halohhh") => {
    console.log(`${great} !`)
}

sayHello();
sayHello("hola");


console.log('=============================');
const sayName = (name ="ucup") => {
    console.log(`Nama saya ${name}`)
}
sayName();
sayName('udin');

console.log('==========function satu baris===================');
const multiply = (a, b) => a * b;

console.log(multiply());
console.log(multiply(3,4));

console.log('=============================');
const introduce = name => console.log(`Nama saya ${name}`);
introduce("Leia");
