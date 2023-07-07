function init() {
    const name = 'Mamang Coders';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet();
  }
  
  init();


console.log('==================================================');


function outerFunction() {
  let outerVariable = " am outside !";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let myFunction = outerFunction();

myFunction();