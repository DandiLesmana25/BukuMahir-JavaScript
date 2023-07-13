const badJson = '{"age" : 33}';
try {
  const user = JSON.parse(badJson);
  
  if(!user.name) {
    throw new SyntaxError("name is required");
  }


  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(`JSON error : ${error.message}`);
  
}




console.log('=================');

const json = '{"age" : 33}';

try {
  // ...
  const person = JSON.parse(badJson);
  
  if(!person.name) {
    throw new SyntaxError("name is required");
  }

  dsdsdsds;


  console.log(person.name);
  console.log(person.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);

  } else if (error instanceof ReferenceError) {
    console.log(error.message);

  } else {
    console.log(error.stack);
  }
}
