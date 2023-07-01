function getUsers(isOffline, callback) {

    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];


        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }


        // argumen callback selalu diletakkan terakhir
        callback(null, users);
    }, 3000);
}


function usersCallback(error, users) {
    if (error) {
        console.log('process failed: ', error.message);
        return
    }
    console.log('process succsess');
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);