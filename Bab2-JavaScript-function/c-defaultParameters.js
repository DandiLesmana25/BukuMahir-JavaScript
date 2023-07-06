function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
  exponentsFormula(2);

console.log('================================');

function sayHello(name = "guest") {
  console.log(`Hello ${name}`);
}

sayHello();            //callfunction + default params
sayHello('udin');      //callFunction + argumen


console.log('================================');

function multiply(a, b= getRandomNumber()) {
  console.log(a * b);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}


multiply(5);
multiply(5,5);


