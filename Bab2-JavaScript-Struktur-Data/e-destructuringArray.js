console.log('========================================')

const fruits = ["apple", "banana", "orange", "lemon"];

// destructr array
const [fruit1, , fruit3, fruit4] = fruits;

console.log(fruit1); // Output: "apple"
// console.log(fruit2); // Output: "banana"
console.log(fruit3); // Output: "orange"
console.log(fruit4); // Output: "lemon"


console.log('========================================');
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

console.log('========================================');
function getNumbers() {
    return[1, 2, 3];
}

const [num1, num2, num3] = getNumbers();

console.log(num1);
console.log(num2);
console.log(num3);


console.log('========================================');
// Destructuring Assignment
const motor = ["beat", "Supra", "Vespa", "Scooopy"];
console.log(motor);


let gadean = "ninja";
let kreditan = "CBR";

[gadean, kreditan] = motor;
 
console.log(gadean);
console.log(kreditan);
console.log(motor);
 