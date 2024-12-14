# Pekan 6: Pemodelan Use Case Scenario

## Pengertian dan Fungsi

- Deskripsi tekstual dari sederetan skenario interaksi antara aktor dengan sistem
- Skenario dijelaskan dari perspektif aktor
- "*Use cases are text documents, not diagrams, and use-case modelling is primarily an act of writing text, not drawing diagrams"* (Larman, 2005)
- Skenario: berhasil dan gagal/opsional
- Setiap use case memiliki skenario yang spesifik
- Fungsi
  - Sumber identifikasi objek/klas
  - Acuan dalam pemodelan *sequence diagram*

## Elemen Pemodelan

- Format: singkat (*brief*), informal (*informal*), lengkap (*fully dressed*)
- Aliran (*flow*) dan interaksi (*interaction*)
- Singkat
  - Deskripsi 1 paragraf yang mengacu pada skenario berhasil
- Informal
  - Deskripsi beberpa paragraf yang mencakup skenario berhasil dan gagal/opsional
- Lengkap
  - Deskripsi detil dengan beberapa bagian: nama (*name*), tujuan/deskripsi (*objective/description*), aktor primer (*primary actor*), prakondisi (*preconditions*), aliran utama (*main flow*), aliran alternatif (*alternative flows*), kondisi akhir (*postconditions*)
  - Banyak digunakan dalam praktik

### Contoh Elemen Pemodelan

|Skenario dari use case *Login*|||
|:---|:---:|:---|
|Tujuan||Pengguna dapat dikenali otorisasinya untuk bisa mengakses sitem|
|Aktor||Pengguna|
|Prakondisi||Halaman *login* sudah terbuka|
|Aliran utama|1.|Pengguna memasukkan *username* and *password*|
||2.|Pengguna meminta sistem untuk memproses.|
||3.|Sistem menampilkan halaman utama sistem sesuai dengan otorisasi pengguna.|
|Aliran alternatif|2a.|Jika *username* dan/atau *password* kosong, maka sistem menampilkan pesan "*Username dan/atau password tidak boleh kosong*".|
||2b.|Jika *username* dan/atau *password* tidak valid, maka sistem menampilkan pesan "*Username dan/atau password tidak valid*".|
|Kondisi akhir||Halaman utama sistem terbukan sesuai dengan hak akses dari pengguna yang sudah dikenali sistem|

## Kesalahan Umum

- Penamaan *use case* yang tidak merepresentasikan tujuan dari aktor saat berinteraksi dengan sistem
- Deskripsi informasi yang terlalu umum, baik yang dimasukkan oleh aktor ke sistem maupun yang diterima aktor dari sistem
- Identifikasi aktor yang tidak tepat untuk sebuah *use case*
- Identifikasi prakondisi dan kondisi akhir yang tidak tepat
- Tidak ada deskrpisi apapun pada aliran alternatif (opsi dan/atua *error*)
- Deskripsi aliran utama dan alternatif yang tidak diberikan secara terpisah
- Deskripsi interaksi yang bersifat *white-box*
