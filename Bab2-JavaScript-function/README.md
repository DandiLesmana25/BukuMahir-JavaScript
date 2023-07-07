# Function
Function (fungsi) adalah salah satu konsep fundamental dalam JavaScript yang memungkinkan Anda untuk mengelompokkan blok kode yang dapat digunakan kembali. Dengan menggunakan fungsi, Anda dapat menjalankan serangkaian pernyataan yang terkandung di dalamnya dengan memanggil fungsi tersebut.
Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword function dan nama fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut. contoh :

function multiply(a, b) {
  return a * b;
}

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
multiply(3, 4);

#  Function Parameter
dalam fungsi kita akan banyak bertemu istilah parameter & argument. Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer. 
Perbedaan mendasar antara keduanya antara lain:

Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi. Contoh:
function multiply(a, b) {
  return a * b;
}

sementara Argumen adalah nilai yang diberikan/dimasukan  saat memanggil fungsi dan cocok dengan parameter yang didefinisikan dalam fungsi tersebut.   Contohnya:

multiply(3, 4);

# Default Parameters
Default parameters (parameter default) adalah fitur dalam JavaScript yang memungkinkan Anda memberikan nilai default untuk parameter dalam deklarasi fungsi. Jika argumen tidak diberikan saat pemanggilan fungsi atau argumen yang diberikan adalah undefined, maka nilai default akan digunakan sebagai nilai parameter.



# Rest Parameter

Rest Parameter adalah fitur dalam JavaScript yang memungkinkan kita  untuk menggabungkan argumen yang tersisa menjadi sebuah array dalam deklarasi fungsi. Hal ini memungkinkan kita untuk mengirimkan jumlah argumen yang variabel saat memanggil fungsi.
Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. 
Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

# Arrow Function
Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.
Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function.
 Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.


# variable scope 
Setelah kita memisahkan kode ke dalam blok atau fungsi terpisah, ada satu hal penting yang perlu kita tahu, yaitu variable scoping. Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.

Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, 
sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.
Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. 
Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.

jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.

# Closure
Closure adalah konsep yang penting dalam JavaScript yang terkait dengan lingkup variabel dan fungsi. Closure terjadi ketika sebuah fungsi memiliki akses ke variabel-variabel yang berada di luar lingkupnya, termasuk variabel-variabel yang sudah tidak ada di dalam lingkup eksekusi normalnya.

Sebelumnya kita telah tahu bahwa fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain. 
Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.