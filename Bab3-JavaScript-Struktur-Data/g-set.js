const numberSet = new Set([1, 4, 6, 4, 1]);

// add() =>  menambahkan data ke set
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);


console.log(numberSet);

console.log('==================================');
const set = new Set();

set.add("apple");
set.add("banana");
set.add("orange");

// menghapus nilai dari Set 
set.delete("banana");

// Iterasi  Set
for (const value of set) {
    console.log(value);
  }

//  memeriksa apakah suatu nilai ada 
console.log(set.has("apple")); 
console.log(set);
