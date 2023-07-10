class Employee{
    sayHello(name) {
        console.log(`Hello ${name} nama saya ${this.name}`);
    }
}

class Manager extends Employee{}

const ucup = new Employee();
ucup.name = "aceng";
ucup.sayHello('agus');
console.log(ucup);

const mamang = new Manager();
mamang.name = "coders";
mamang.sayHello('tini');
console.log(mamang);


console.log('========================');
console.log('========================');

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} sedang makan.`);
    }
}

// child class
class Dog extends Animal {
    constructor(name, breed){
        super(name); // Memanggil konstruktor class induk menggunakan super()
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} sedang menggongong.`);
    }
}

class Cat extends Animal{

}


// membuat instance objek dari class anak
let dogy = new Dog ("boby", 'golden retriever');

let kitty = new Cat('kitty');
kitty.eat();

dogy.eat();  //memanggil method dari class induk
dogy.bark(); //memangggil method dari calss anak