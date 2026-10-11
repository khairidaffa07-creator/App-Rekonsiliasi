# SIA Rekonsiliasi Kas dan Bank pada UMKM

Aplikasi Sistem Informasi Akuntansi (SIA) untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) dalam mengelola transaksi kas, memantau mutasi bank, melakukan rekonsiliasi, dan menyajikan laporan keuangan kas dan bank secara terstruktur.

## 🌐 Demo Aplikasi

**Akses aplikasi:** https://khairidaffa07-creator.github.io/App-Rekonsiliasi/

**Repository GitHub:** https://github.com/khairidaffa07-creator/App-Rekonsiliasi

## 📌 Deskripsi

SIA Rekonsiliasi Kas dan Bank pada UMKM dikembangkan untuk mempermudah proses pencatatan dan pencocokan transaksi kas internal dengan mutasi rekening bank. Aplikasi ini menggunakan Supabase sebagai layanan basis data untuk menyimpan dan mengelola informasi transaksi secara terpusat.

Melalui aplikasi ini, pengguna dapat memantau saldo dan ringkasan transaksi, mengelola akun kas dan bank, mencatat transaksi kas, memasukkan mutasi bank, serta mengidentifikasi transaksi yang sudah maupun belum direkonsiliasi.

## 🎯 Tujuan Aplikasi

- Membantu UMKM mengelola pencatatan kas dan bank secara terstruktur.
- Mempermudah pencocokan transaksi internal dengan mutasi bank.
- Mengidentifikasi transaksi yang belum cocok atau belum direkonsiliasi.
- Menyediakan ringkasan informasi kas dan bank melalui dashboard.
- Mendukung penyusunan laporan untuk membantu pengawasan dan pengendalian keuangan.

## ✨ Fitur Utama

### 1. Dashboard
Menampilkan ringkasan informasi keuangan, antara lain:
- Saldo kas dan bank.
- Total kas masuk dan kas keluar.
- Ringkasan kredit dan debit bank.
- Jumlah akun kas dan bank.
- Jumlah transaksi kas dan mutasi bank.

### 2. Akun Kas dan Bank
Digunakan untuk mengelola daftar akun kas dan bank yang menjadi dasar pencatatan transaksi dan proses rekonsiliasi.

### 3. Transaksi Kas
Digunakan untuk mencatat transaksi penerimaan dan pengeluaran kas internal UMKM sebagai dasar pembanding dengan mutasi rekening bank.

### 4. Mutasi Bank
Digunakan untuk mengelola data mutasi rekening bank, termasuk transaksi kredit dan debit yang tercatat pada rekening.

### 5. Rekonsiliasi
Membantu mencocokkan transaksi kas dengan mutasi bank berdasarkan kriteria:
- Akun kas dan bank yang sama.
- Tanggal transaksi yang sama.
- Nominal transaksi yang sama.
- Transaksi kas masuk dicocokkan dengan mutasi bank kredit.
- Transaksi kas keluar dicocokkan dengan mutasi bank debit.

Pencocokan dilakukan secara satu-ke-satu (*one-to-one matching*) untuk menghindari penggunaan satu transaksi dalam beberapa pasangan rekonsiliasi.

### 6. Laporan
Menyediakan informasi transaksi dan hasil rekonsiliasi untuk membantu pengguna meninjau aktivitas kas dan bank serta mengidentifikasi transaksi yang masih memerlukan pemeriksaan.

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML5 | Membangun struktur halaman aplikasi. |
| CSS3 | Mengatur tampilan, tata letak, dan responsivitas aplikasi. |
| JavaScript | Menangani logika aplikasi dan interaksi pengguna. |
| Supabase | Menyediakan basis data PostgreSQL dan layanan backend. |
| GitHub | Menyimpan kode sumber dan mengelola versi proyek. |
| GitHub Pages | Mempublikasikan aplikasi agar dapat diakses melalui browser. |

## 🗄️ Struktur Basis Data

Aplikasi menggunakan Supabase dengan tabel utama berikut:

| Nama Tabel | Fungsi |
|---|---|
| `akun_kas_bank` | Menyimpan data akun kas dan bank. |
| `transaksi_kas` | Menyimpan catatan transaksi penerimaan dan pengeluaran kas. |
| `mutasi_bank` | Menyimpan catatan mutasi rekening bank. |
| `rekonsiliasi` | Menyimpan data hasil pencocokan transaksi kas dan mutasi bank. |

Relasi antartabel digunakan untuk menghubungkan akun, transaksi kas, mutasi bank, dan hasil rekonsiliasi sesuai dengan rancangan basis data aplikasi.

## 📂 Struktur Proyek

Struktur utama proyek memisahkan tampilan, styling, dan logika JavaScript agar kode lebih mudah dipelihara.

App-Rekonsiliasi/
├── index.html
├── akun.html
├── css/
│   │   └── style.css
├── js/
│   └── supabase.js
│
├── backend/
│   └── apps.js
│
└── README.md

*Catatan: Struktur di atas merupakan gambaran file utama. Sesuaikan dengan struktur folder aktual di repository, termasuk file halaman dan direktori pendukung lainnya.*

## ⚙️ Instalasi dan Konfigurasi

### 1. Clone Repository

Jalankan perintah berikut melalui terminal:

```bash
git clone https://github.com/khairidaffa07-creator/App-Rekonsiliasi.git
cd App-Rekonsiliasi
```

### 2. Konfigurasi Supabase

1. Buat atau buka proyek di [Supabase](https://supabase.com/).
2. Pastikan tabel `akun_kas_bank`, `transaksi_kas`, `mutasi_bank`, dan `rekonsiliasi` sudah tersedia.
3. Buka file konfigurasi koneksi Supabase pada `js/supabase.js` atau lokasi yang digunakan oleh versi aplikasi saat ini.
4. Masukkan URL proyek Supabase dan publishable key atau anon key sesuai konfigurasi proyek.
5. Pastikan kebijakan keamanan Row Level Security (RLS) sesuai dengan kebutuhan akses aplikasi.

**Penting:** Jangan menempatkan `service_role key`, secret key, atau kredensial administratif di kode frontend maupun repository publik.

### 3. Jalankan Aplikasi secara Lokal

Jika menggunakan Python, jalankan server lokal dari direktori yang berisi file aplikasi:

```bash
python -m http.server 5500
```

Buka alamat berikut di browser:

```text
http://localhost:5500/
```

Pastikan direktori server sesuai dengan lokasi `index.html` agar seluruh file CSS dan JavaScript dapat dimuat dengan benar.

### 4. Publikasikan melalui GitHub Pages

Aplikasi dapat dipublikasikan melalui GitHub Pages dengan langkah berikut:

1. Buka repository GitHub.
2. Pilih **Settings → Pages**.
3. Pilih branch `main` dan direktori publikasi yang sesuai dengan lokasi `index.html`.
4. Simpan konfigurasi dan tunggu proses deployment selesai.
5. Buka URL GitHub Pages untuk memeriksa aplikasi.

Pastikan file konfigurasi Supabase sudah benar dan akses basis data telah diatur dengan aman.

## 🔄 Alur Proses Rekonsiliasi

1. Pengguna mencatat transaksi kas internal.
2. Pengguna memasukkan atau mengelola data mutasi bank.
3. Sistem membandingkan transaksi berdasarkan akun, tanggal, nominal, dan jenis transaksi.
4. Transaksi kas masuk dicocokkan dengan kredit bank, sedangkan transaksi kas keluar dicocokkan dengan debit bank.
5. Sistem menyimpan hasil pencocokan ke data rekonsiliasi.
6. Pengguna meninjau transaksi yang cocok maupun yang belum cocok melalui halaman rekonsiliasi dan laporan.

Transaksi yang belum cocok perlu diperiksa lebih lanjut karena dapat disebabkan oleh perbedaan pencatatan, waktu transaksi, biaya administrasi bank, atau transaksi lain yang belum dicatat.

## 🔐 Keamanan dan Penggunaan

- Gunakan konfigurasi Supabase yang sesuai untuk aplikasi frontend.
- Terapkan RLS dan kebijakan akses yang tepat pada tabel basis data.
- Hindari memasukkan data keuangan sensitif ke lingkungan publik tanpa pengamanan yang memadai.
- Lakukan pemeriksaan hasil rekonsiliasi sebelum menggunakan laporan sebagai dasar keputusan keuangan.

## 🚀 Pengembangan Selanjutnya

Pengembangan aplikasi dapat diarahkan pada peningkatan validasi data, penyaringan transaksi berdasarkan periode, ekspor laporan, pencatatan jejak aktivitas, serta penguatan autentikasi dan otorisasi pengguna.

## 👨‍💻 Pengembang

Proyek ini dikembangkan sebagai aplikasi Sistem Informasi Akuntansi yang berfokus pada pengelolaan kas dan bank serta proses rekonsiliasi untuk UMKM.

---

**SIA Rekonsiliasi Kas dan Bank pada UMKM**  
*Mempermudah pencatatan, pencocokan, dan pemantauan transaksi kas dan bank secara terstruktur.*
