// const { rejects } = require("assert");
// const { resolve } = require("path");

const { error } = require("console");

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount > 100) {
                reject(new Error('Tidak cukup uang untuk ditarik'));
            }

            resolve(amount);
        }, 1000);
    });
}




// prmoise kedua
function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(money <10) {
                reject(new Error('Tidak cukup uang untuk membeli tiket'));
            }

            resolve('ticket-1');
        }, 1000)
    })
}



function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!ticket) {
            reject(new Error('Tidak punya tiket'));
          }
    
          resolve('enjoy the movie');
        }, 1000);
      });
}


function watchMovie() {
    withDrawMoney(10)
    .then((money) => {
        return buyCinemaTicket(money);
    })
    .then((ticket) => {
        return goInsideCinema(ticket);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });

}

// call function wM
watchMovie();