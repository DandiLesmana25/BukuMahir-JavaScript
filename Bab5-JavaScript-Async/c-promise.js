function getUsers(isOffline) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const users = ['udin', 'ucup', 'akum'];
            
            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }
            resolve(users);
        }, 3000);
    })
}

getUsers(false)
.then(users => console.log(users))
.catch(err => console.log(err.message));