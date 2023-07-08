console.log('==================================');
class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
 

    }

    // method
    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
      }
}



const car1 = new Car('BMW', 'red', 200);
car1.drive();

const car2 = new Car('Audi', 'blue', 220);
car2.drive();

const car3 = new Car('BMW', 'black', 250);
car3.drive();

console.log(car1);
console.log(car2);
console.log(car3);
    
console.log('=============================');

// function Person(firstName, lastName) {
//     // Property
//     this.firstName = firstName;
//     this.lastName = lastName;
  
//     // Method
//     this.sayHello = function() {
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//     };
//   }
  
//   // Membuat instance objek menggunakan fungsi konstruktor
//   let person1 = new Person("John", "Doe");
//   let  person2 = new Person("Mamang", "Coders");
  
//   // Mengakses properti dan memanggil metode pada objek
//   console.log(person1.firstName); // Output: John
//   console.log(person2.lastName); 
  
//   person1.sayHello(); // Output: Hello, my name is John Doe.
//   person2.sayHello(); 

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const udin = new Person("Udin", "mangkubumi");
const aceng = new Person("aceng", "fikri");

console.log(udin.firstName);
console.log(aceng.lastName);

udin.sayHello("Joko");
aceng.sayHello("Joko");
