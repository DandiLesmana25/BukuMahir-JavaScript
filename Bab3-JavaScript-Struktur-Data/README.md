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

# d. Destructuring  object
Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan(extract) nilai dari objek  ke variabel terpisah dengan sintaksis yang lebih ringkas. Ini sangat berguna ketika Anda ingin mengakses properti-properti objek secara mudah.
Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.

# e. Destructuring  array
Destructuring Array adalah fitur dalam JavaScript yang memungkinkan Anda untuk mengeluarkan (extract) nilai-nilai dari array ke variabel terpisah dengan sintaksis yang lebih ringkas. Ini sangat berguna ketika Anda ingin mengakses elemen-elemen array secara mudah
Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.

# f. map

Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:
const myMap = new Map();

Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

# g. set
Struktur data yang akan kita bahas berikutnya adalah Set. Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. 
Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi:
 add().
 Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.

# h. WeakMap & WeakSet
 WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

 Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:
Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.