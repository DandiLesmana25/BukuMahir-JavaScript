# a.object
Struktur data objek adalah salah satu fitur penting dalam JavaScript yang memungkinkan Anda menyimpan dan mengatur data dalam bentuk pasangan "key-value". Objek dapat berisi berbagai jenis data, seperti string, angka, array, fungsi, dan bahkan objek lain  
 Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
 Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}. contoh :
 const user = {};
 Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya. Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi.
 Satu object dapat memiliki beberapa pasang key-value yang dipisahkan dengan tanda koma (,).

untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya, dan bisa juga  mengakses properti dari object menggunakan bracket atau tanda kurung siku. 

 ${user.firstName}
 user[“firstName”];

 # b.array
 . Array dapat berisi elemen-elemen dengan berbagai tipe data, seperti angka, string, objek, atau bahkan array lain. 
 Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
 Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

-memanipulasi data pada array tersebut
untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array.
Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().

 Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.

 untuk menghapus data Sama seperti object, kita bisa menggunakan keyword delete


 # c.Spread Operator
 Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
 Ini memudahkan dalam menggabungkan, menyalin, atau memisahkan nilai-nilai tersebut
 Spread operator dituliskan dengan tiga titik (...)
 Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
