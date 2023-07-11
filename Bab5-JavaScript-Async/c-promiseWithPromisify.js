// Mengubah Callback Menjadi Promise dengan Promisify

const { promisify} = require('util');

function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['Udin', 'Ucup', 'Aceng'];
    
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }

  const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
.then(users => console.log(users))
.catch(err => console.log(err.message));

getUsersPromise(true)
.then(users => console.log(users))
.catch(err => console.log(err.message));
