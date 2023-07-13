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




/*
dengan promise
*/ 
// function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => buyCinemaTicket(money))
//       .then((ticket) => goInsideCinema(ticket))
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error.message));
//   }
//   watchMovie();

  /*
dengan async await
*/ 

  async function watchMovie() {
    try {
      const money = await withDrawMoney(10);
      const ticket = await buyCinemaTicket(money);
      const result = await goInsideCinema(ticket);
   
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
   
  watchMovie();