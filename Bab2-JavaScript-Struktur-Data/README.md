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