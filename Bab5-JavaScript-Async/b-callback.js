function getUsers(isOFfline, callback) {
    setTimeout(() => {
        const users = ['ucup', 'udin', 'asep'];

        if(isOFfline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }



        callback(null, users);
    }, 3000);
}

function userCallbback(error, users) {
    if(error) {
    console.log('process failed: ', error.message);
    return;    
    }

    console.log('process succes: ', users);
}

getUsers(false, userCallbback);
getUsers(true, userCallbback);

console.log('======================');

// function fetchData(callback) {
//     setTimeout(function() {
//       const data = "Ini data hasil fetch";
//       callback(data);
//     }, 4000);
//   }
  
//   function processData(data) {
//     console.log("Data yang diproses:", data);
//   }
  
//   fetchData(processData);
  