console.log('=============================');
function sayHello(name) {
    console.log(`Hallo mamang  ${name}`)
}

sayHello("coders");
//  otuuput:  Hallo mamang  coders


console.log('=============================');
function mobil(merk, price) {
    if(merk === "brio") {
        console.log(`${merk} Harganya ${price} juta`);

    } else if(merk === "avanza") {
        console.log(`${merk} Harganya ${price} juta`);

    } else if(merk === "Xenia") {
        console.log(`${merk} harganya ${price} juta`);

    } else {
        console.log("Data mobil tidak ditemukan")
    }
}

mobil("avanza",200);
//  otuuput: avanza Harganya 200 juta




console.log('================ math calculatiion ====================');
function multiply(a,b) {
    return a * b;
}

console.log(multiply(5,5));



console.log("========================");
function perkalian(value1, value2) {
    return value1 * value2;
} 



let result = perkalian(4,5);
console.log(result);





console.log('================ expression function ====================');
const greeting = function(name, language) {
    if(language === "english") {
        return "Good morning " + name + "!";

    }else if(language === "french") {
        return "Bonjour " + name + " !";

    }else {
        return "selamat pagi " + name + "!";
    }
}

console.log(greeting("ucup", 'english'));
// output : Good morning ucup!