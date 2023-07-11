/* Promise.all */ 

const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

/* if promise rejected

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups error')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); 
*/ 



/* Promise.race */ 

const promiseRace1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promiseRace2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promiseRace3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promiseRace1, promiseRace2, promiseRace3])
  .then((value) => console.log(value));


  /*if promise race rejected
  
  const promiseRace1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups error raceee')), 1000));
const promiseRace2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promiseRace3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promiseRace1, promiseRace3, promiseRace3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups error
  */ 





/* Promise.race */ 

  const promiseAllSettled1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  const promiseAllSettled2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
  const promiseAllSettled3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
  
  Promise.allSettled([promiseAllSettled1, promiseAllSettled2, promiseAllSettled3])
   .then((results) => console.log(results));



   


/* Promise.any*/ 

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected   