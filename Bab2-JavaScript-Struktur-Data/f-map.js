console.log('=========================');

const myMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, true]
])


console.log(myMap);


console.log('=========================');
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);
  console.log(capital.get("London"));

//   menambahkan pasangan key-value baru
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));


console.log('=========================');


const person = new Map();

person.set("name", "John");
person.set("age", 30);
person.set("profession", "developer");

person.delete('age');

console.log(person.has("profession"));
console.log(person.has("adddres"));
console.log(person.get("name")); 
console.log(person.get("age"));  //Output: undefined karena sudah di delete
console.log(person.size);


console.log('=========================');

const mobil = new Map();

mobil.set("merk", "ayla");
mobil.set("color", "white");

// Menggunakan loop for...of
for (const [key, value] of mobil) {
  console.log(key, value);
}

// Menggunakan metode forEach()
mobil.forEach((value, key) => {
  console.log(key, value);
});
