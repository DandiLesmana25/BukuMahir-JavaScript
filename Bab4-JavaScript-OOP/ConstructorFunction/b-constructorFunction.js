
function Car(brand, color, maxSpeed)  {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
}


Car.prototype.drive = function() {
    console.log(` ${this.brand} ${this.color} is driving`);
}


// Membuat objek mobil dengan constructor function Car
const mcqueen = new Car('Toyota', 'Silver', 200,);

const matter = new Car('honda', 'red', 200);

console.log(mcqueen);
mcqueen.drive();
console.log(matter);
matter.drive();

/*
Sintaks Class di ES6

*/
 
