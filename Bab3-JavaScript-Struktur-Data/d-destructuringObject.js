console.log('====================================')

const person = {
    firstName: 'udin',
    lastName: 'van houten',
    age: 21,
    profession: "developer"
}

const { firstName, lastName, age: usia, profession} = person;
console.log(firstName, lastName, usia);
console.log(profession);

console.log('====================================')
// Destructuring Assignment
const motor = {
    merek: "beat",
    pemilik: "ucup",
    CC: 180
  }
   
  let merek = "scoopy";
  let CC = 200;
   
  // menginisialisasi nilai baru melalui destructuring object
  ({ merek, CC, status = false} = motor);
   
  console.log(merek);
  console.log(CC);
  console.log(status);











console.log('====================================')