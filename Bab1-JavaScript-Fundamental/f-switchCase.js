console.log('======contoh 1============')

let language = "sunda";
let greeting = null;

switch (language) {
    case "english" :
        greeting = "goog morng"
        break;
    case "sunda" :
        greeting = "wilujeng enjing"
        break;
    default:
        greeting = 'selamat pagi';        
}

console.log(greeting);

console.log('=========================')
console.log('======contoh 2============')

const day = "Friday";

switch(day) {
    case "Monday":
        console.log("Hari ini adalah senin");
        break;
    case "Tuesday":
        console.log("Hari ini adalah selasa");    
        break;
    case "wednesday":
        console.log("Hari ini adalah rabu");
        break;
    case "Thursday":
        console.log("Hari ini adalah Kamis");
        break;
    case "Friday":
        console.log("Hari ini adalah jumat");
        break;
    case "sunday" :
        console.log("Hari ini adalah sabtu");  
        break;
    default:
        console.log("Hari yang dimasukan tidak valid");
        break;                      
}

console.log('=========================')
console.log('======contoh 3============')

const drink = "teh";

switch(drink) {
    case "kopi":
        console.log("Saya akan meminum kopi");
        break;
    case "teh":
        console.log("saya akan meminum teh");
        break;
    case "jamu":
        console.log("saya akan meminum jamu");
        break;
    default:
        console.log("saya tidak ingin meminum apa pun");
        break;            
}
