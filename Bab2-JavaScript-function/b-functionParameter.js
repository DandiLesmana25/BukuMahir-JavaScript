const user = {
    id: 21,
    displayName: 'mamang',
    fullName: 'Mamang Coders'
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);
// (displayName, fullName) = parameter
// (user) = argumen


console.log('=====================================');
function addNumbers(a, b) {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
  }
  
addNumbers(5, 3);
// (a,b) = parameter
// (5,3) = argumen