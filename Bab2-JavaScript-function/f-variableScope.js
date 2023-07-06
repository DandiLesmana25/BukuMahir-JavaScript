
function sayHello() {
    let name = "John"; // Variabel lokal
    console.log(`Hello, ${name}!`); // Mengakses variabel lokal di dalam fungsi
  }
  
  sayHello(); // Output: Hello, John!
//   console.log(name);  // Error: name is not defined (tidak dapat mengakses variabel lokal di luar fungsi)


console.log('=============variabel global =========================');
var message = "Hello"; // Variabel global

function greet() {
  console.log(message); // Mengakses variabel global di dalam fungsi
  varGlobal = 'ini adalah variable global';  //var global karena gak pake let/const
}

greet(); // Output: Hello
console.log(message); // Output: Hello (variabel global dapat diakses di luar fungsi)
console.log(varGlobal);
