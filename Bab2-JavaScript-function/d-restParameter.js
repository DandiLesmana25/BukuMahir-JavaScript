function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;            //Setara dengan: result = result + numbers;
    }

    return result;
}

console.log(sum(1,2,3,4,5));
// outp : 15



console.log("=============================");

function jumlah(...num) {
    let total = 0;
    for( let n of num){
        total += n;  //Setara dengan: total = total + n;
    }
    return total;
}

console.log(jumlah(1,2,3,4));
console.log(jumlah(4,5,6,7,));