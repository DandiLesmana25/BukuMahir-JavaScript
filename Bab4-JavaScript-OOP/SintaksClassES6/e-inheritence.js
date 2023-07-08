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
