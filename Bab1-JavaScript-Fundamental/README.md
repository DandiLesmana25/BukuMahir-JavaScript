# b. Tipe Data

Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. Tipe data merupakan pengklasifikasian data berdasarkan jenisnya.

Berikut beberapa tipe data yang ada di javascript:

1. Undefined
   Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.

2. Numbers
Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya.

 operator aritmatika pada tipe data number:
 +	Penjumlahan
 -	Pengurangan
 /	Pembagian
 *	Perkalian
 %	Sisa hasil bagi
 **	Perpangkatan
 (++) increment
  (--) decrement. 

note:  Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.
Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. 
Berikut ketentuannya:
Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.


3. BigInt

ipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1).
Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka. 

4. Strings

string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. 
Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik.

5. Boolean
Boolean hanya memiliki dua nilai, yaitu true atau false. 
 Tipe data ini menjadi kunci utama dalam penentuan logika.
 Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false


 6. Null
  Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel.
 Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.
 Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa-apa dan tidak ingin terikat oleh tipe data apa pun.

 7. Symbol
  Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik.



# c. Operator
   Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.

1. Assignment Operator   
   Operator ini digunakan untuk memberikan nilai pada variabel.

 shortcut dalam menentukan nilai :

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;   

2. Comparison Operator

operator komparasi sebagai logika dasar dalam membandingkan nilai pada JavaScript.

Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai:

Operator. 
== (Membandingkan kedua nilai apakah sama (tidak identik).)
!= (Membandingkan kedua nilai apakah tidak sama (tidak identik).)
=== (Membandingkan kedua nilai apakah identik.)
!== (Membandingkan kedua nilai apakah tidak identik.)
>   (Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.)
>= 	(Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.)

< (Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.)

<= (Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua)

Perbedaan antara “sama” (==) dan “identik” (===).
- Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan ==
-  jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.


3. Logical Operator

. Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

logical operator dan fungsinya:

# && 
Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
# ||
 Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).

# !
Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.


# D. If/Else Statement
Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan. 

# D. ternary operator atau conditional expressions.
Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions. Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris.

Ternary operator membutuhkan tiga operand. Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi. Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua. Terakhir adalah expression yang dieksekusi ketika kondisinya salah. Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.
( namaVariabel = kondisi ? nilaiJikaTrue : nilaiJikaFalse;)

