try {
    console.log('kode aman satu');
    console.log('aman dua');
} catch (error) {
    console.log('tidak ada error, aku diabaikan');
}

/*
Kode di dalam blok try tidak akan menghasilkan eror, 
sehingga kode di dalam blok catch akan diabaikan dan tidak dijalankan
*/ 




console.log('========contoh error=============');

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  //3
    
} catch (error) {
    console.log('error yaaa');    //4x
}

/*Baris kode (2) akan menghasilkan eror. 
 sehingga baris kode (3) tidak akan tereksekusi.
  Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.
*/ 


console.log('==========================');

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
   
  /* output
  Awal blok try
  ReferenceError
  errorCode is not defined
  ReferenceError: errorCode is not defined
      at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
      at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
      at async Loader.import (internal/modules/esm/loader.js:166:24)
      at async Object.loadESM (internal/process/esm_loader.js:68:5)
  */