class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);


  console.log('==============================');

  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._cassisNumber  = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }

    get chassisNumber() {
      return this._cassisNumber;
    }

    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
}

const car = new Car('BMW', 'red', 200);

console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car);
car.brand = 'honda';

console.log(car.chassisNumber);  
console.log(car);

   
console.log('==============================');
class Person{
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  set fullName(name) {
    let parts = name.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

let persons = new Person('udin', 'pamungkas');
console.log(persons.fullName);

persons.fullName = "mamang coders";
console.log(persons.fullName);