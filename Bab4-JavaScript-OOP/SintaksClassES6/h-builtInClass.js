//  class Date
const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});

const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);

//  class Array
class UniqueArray extends Array{
  constructor(...args) {
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
    super(...uniqueValue);
  }

  push(item) {
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}
 

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']



// class bawaan js lainnya
/*
Date
Object
Array
Math
String
Number
*/ 