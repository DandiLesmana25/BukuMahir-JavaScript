console.log('=====================protected ==================');

class Person {
    constructor(name) {
      this._name = name; // Properti dengan visibility protected
    }
  
    _greet() {
      console.log(`Hello, my name is ${this._name}.`); // Metode dengan visibility protected
    }
  }
  
  class Employee extends Person {
    constructor(name, position) {
      super(name);
      this.position = position;
    }
  
    introduce() {
      console.log(`I'm ${this._name} and I work as a ${this.position}.`);
      this._greet();
    }
  }
  
  var employee = new Employee("John", "Developer");
  employee.introduce(); // Output: I'm John and I work as a Developer. Hello, my name is John.
  

console.log('=====================private ==================');

class User {
    constructor(name) {
      this.#name = name; // Properti dengan visibility private
    }
  
    #greet() {
      console.log(`Hello, my name is ${this.#name}.`); // Metode dengan visibility private
    }
  
    sayHello() {
      this.#greet(); // Metode public yang menggunakan metode private
    }
  }
  
  var users = new User("John");
  users.sayHello(); // Output: Hello, my name is John.
  console.log(users.#name); // Error: Private field '#name' must be declared in an enclosing class
  users.#greet(); // Error: Private field '#greet' must be declared in an enclosing class
  