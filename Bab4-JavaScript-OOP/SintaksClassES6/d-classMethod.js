class Person {
    constructor(name) {
        this.name = name;            
    }

    sayHello(name){
        console.log(`halo ${name} nama saya ${this.name}`);
    }
}

const mamang = new Person('mamang');
console.log(mamang);
console.log(mamang.name);
mamang.sayHello('ucup');

const udin = new Person('udin');
console.log(udin.name);
console.log(udin);
udin.sayHello('ucup');
