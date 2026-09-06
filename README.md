<div align="center">

  # LarisIn
  ### Solusi Manajemen Operasional & Keuangan Cerdas untuk UMKM

  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-success?style=for-the-badge)](https://larisin.vercel.app)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/frevszz/LarisIn)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

  **Submission for ITECHNO CUP 2026 - Web Development**

  **By LarisIn**

</div>

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Unggulan](#-fitur-unggulan)
- [Demo & Screenshot](#-demo--screenshot)
- [Teknologi](#-teknologi)
- [Arsitektur Sistem](#-arsitektur-sistem)
- [Instalasi & Setup](#-instalasi--setup)
- [Penggunaan](#-penggunaan)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Tim Developer](#-tim-developer)
- [Lisensi](#-lisensi)

---

## 👥 Tim Developer

| Nama | Peran | GitHub |
|------|-------|--------|
| **Farell Dio Rezvianzha** | Project Lead & Full Stack Developer | [GitHub](https://github.com/frevszz) |
| **Abner Bagus** | Frontend Developer | [GitHub](https://github.com/AbnerBgs) |
| **Farieza Davie Rieawan** | Backend Developer | [GitHub](https://github.com/fariezadavie) |

---

## 🎯 Tentang Proyek

### Latar Belakang

Banyak Pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) menghadapi kendala dalam pencatatan transaksi manual, pengelolaan stok barang yang lambat, serta pencatatan arus kas yang kurang akurat. Tanpa adanya sistem terintegrasi, pemantauan kesehatan finansial dan operasional bisnis menjadi tidak efisien.

### Solusi yang Ditawarkan

**LarisIn** hadir sebagai platform web manajemen bisnis serba ada (*all-in-one*) berbasis web khusus UMKM. Sistem ini dirancang agar mudah digunakan serta dipantau di mana saja dan kapan saja, mengintegrasikan kasir digital (*Point of Sale*), pencatatan inventaris otomatis, analisis grafik penjualan & arus kas real-time, hingga halaman verifikasi publik profil UMKM.

### Tujuan Proyek

- 🎯 **Tujuan Utama**: Menyediakan aplikasi pengelolaan operasional dan pencatatan keuangan UMKM berbasis web yang cepat, modern, dipantau real-time, serta mudah diakses kapan saja dan di mana saja.
- 📊 **Target Pengguna**: Pemilik bisnis UMKM, kasir, dan pengelola stok barang.
- 💡 **Value Proposition**: Platform manajemen bisnis berbasis web yang fleksibel dengan pencatatan pesanan instan, pencetakan struk digital, dan pemantauan target finansial harian/bulanan.

---

## ✨ Fitur Unggulan

### Fitur Utama

| Fitur | Deskripsi | Keunggulan |
|-------|-----------|------------|
| **Manajemen Pesanan & Kasir** | Pembuatan dan pemrosesan transaksi penjualan cepat lengkap dengan pencetakan struk belanja. | Mempercepat transaksi di kasir dan mendukung pembuatan nota otomatis. |
| **Pencatatan Keuangan & Analytics** | Grafik visualisasi penjualan, pemasukan, pengeluaran, dan penentuan target keuangan. | Memberikan wawasan kesehatan bisnis secara real-time yang dapat dipantau dari mana saja. |
| **Manajemen Stok & Produk** | Pengelolaan data produk, kategorisasi, serta pelacakan sisa stok otomatis saat terjadi transaksi. | Mencegah kekosongan atau kelebihan stok barang secara akurat. |
| **Manajemen Profil UMKM** | Pengaturan informasi profil bisnis yang terintegrasi dengan halaman verifikasi publik. | Meningkatkan kepercayaan pelanggan dan kredibilitas bisnis UMKM. |

### Fitur Tambahan

- **Profil UMKM Publik** - Halaman verifikasi publik (`/cek-umkm`) untuk meningkatkan kredibilitas bisnis di mata konsumen.
- **Target Bisnis** - Fitur set up target capaian keuangan dengan indikator kemajuan (*progress bar*).
- **Pusat Bantuan** - Halaman panduan penggunaan sistem bagi pengguna baru (`/help`).

---

## 📸 Demo & Screenshot

### Live Demo

🔗 **[Kunjungi Website](https://larisin.vercel.app)**

### Screenshot Aplikasi

<div align="center">
  <img src="[URL_SCREENSHOT_1]" alt="Homepage" width="800"/>
  <p><em>Homepage - Tampilan utama aplikasi</em></p>
  
  <img src="[URL_SCREENSHOT_2]" alt="Dashboard" width="800"/>
  <p><em>Dashboard - Panel kontrol pengguna</em></p>
  
  <img src="[URL_SCREENSHOT_3]" alt="Feature" width="800"/>
  <p><em>[Nama Fitur] - [Deskripsi screenshot]</em></p>
</div>

### Video Demo

📹 **[Link Video Demo](https://[URL_VIDEO])** _(opsional)_

---

## 🛠️ Teknologi

### Tech Stack

#### Frontend
Framework  : Next.js 15 (App Router)  
Language   : TypeScript  
UI Library : Tailwind CSS v4, Lucide React, Shadcn/Radix UI  
State Mgmt : React Hooks / Context  
Charts     : Recharts  

#### Backend
Runtime    : Node.js  
Framework  : Next.js API Routes (Route Handlers)  
Database   : PostgreSQL  
ORM        : Prisma ORM v7  
Auth       : Clerk Authentication  

#### DevOps & Tools
Deployment   : Vercel  
Version Ctrl : Git & GitHub  

### Alasan Pemilihan Teknologi

| Teknologi | Alasan Pemilihan |
|-----------|------------------|
| **Next.js 15 (App Router)** | Memberikan performa Server-Side Rendering (SSR) yang cepat, SEO friendly, serta arsitektur full-stack terintegrasi. |
| **Prisma ORM** | Memudahkan manipulasi dan skema database dengan type-safety mutlak dari TypeScript. |
| **Clerk Auth** | Solusi autentikasi modern yang aman, siap pakai, dan mudah diintegrasikan dengan Next.js App Router. |
| **Tailwind CSS v4** | Mempercepat penulisan styling antarmuka dengan utility classes yang ringkas dan responsif. |

### Dependencies Utama

#### Core & Framework
* **Next.js 15 (App Router)** - Framework React utama untuk rendering server/client dan routing API.
* **React 19 & React DOM** - Library UI utama berbasis komponen.
* **TypeScript** - Sistem pengetikan statis untuk keamanan kode.

#### Autentikasi & Database
* **@clerk/nextjs** - Layanan manajemen autentikasi dan otorisasi pengguna.
* **@prisma/client** - ORM Client untuk mengelola query dan akses database.

#### UI Components & Styling
* **Tailwind CSS v4** - Utility-first CSS framework untuk styling antarmuka.
* **Lucide React** - Set ikon vektor modern untuk komponen UI.
* **Radix UI / Shadcn UI** - Komponen UI yang dapat diakses (seperti Dialog, Dropdown, Tooltip, dll).
* **Class Variance Authority (CVA), clsx, & tailwind-merge** - Utility untuk pengolahan class Tailwind secara dinamis.

#### Data Visualization & Utilities
* **Recharts** - Library grafik visualisasi data penjualan, keuangan, dan statistik bisnis.

---

## 🏗️ Arsitektur Sistem

### System Architecture

[Client / Browser] <---> [Next.js App Router (Vercel)] <---> [Clerk Auth Service]
                                    |
                                    v
                           [Prisma ORM v7]
                                    |
                                    v
                          [PostgreSQL Database]

### Database Schema

[User / Clerk ID] ──1:1──> [ProfileUMKM] ──1:N──> [Product]
                                |                    |
                                └──1:N──> [Order] ───┘ (Items)
                                |
                                └──1:N──> [FinanceRecord / Target]

### Folder Structure

LarisIn/  
├── prisma/                     # Konfigurasi Skema & Migrasi Database  
│   ├── migrations/             # History migrasi database SQL  
│   └── schema.prisma           # Definisi model data Prisma  
├── public/                     # Aset statis & gambar  
│   └── img/landing/            # Gambar publik untuk halaman landing  
├── src/  
│   ├── app/                    # Routing Utama (Next.js App Router)  
│   │   ├── (dashboard)/        # Grouping Route Dashboard  
│   │   │   ├── dashboard/      # Halaman Utama Dashboard  
│   │   │   ├── finance/        # Laporan & Arus Kas Keuangan  
│   │   │   ├── more/           # Halaman Lainnya  
│   │   │   ├── orders/         # Form Pesanan & Kasir  
│   │   │   ├── product/        # Manajemen Produk  
│   │   │   ├── profile-umkm/   # Pengaturan Profil UMKM  
│   │   │   ├── sales/          # Laporan Penjualan  
│   │   │   ├── scan/           # Halaman Pemindai Barcode  
│   │   │   └── stock/          # Inventaris Stok  
│   │   ├── (landing)/          # Grouping Route Publik  
│   │   │   ├── cek-umkm/       # Pencarian/Verifikasi UMKM  
│   │   │   └── help/           # Pusat Bantuan  
│   │   └── api/                # Endpoints API Route Handler  
│   │       ├── finance/        # API Keuangan  
│   │       ├── orders/         # API Pesanan  
│   │       ├── product/        # API Produk (& /id)  
│   │       ├── profileUmkm/    # API Profil UMKM User  
│   │       ├── scan/[barcode]/ # API Verifikasi Barcode  
│   │       ├── target/         # API Target Keuangan  
│   │       └── umkm/           # API Profil UMKM Publik  
│   ├── components/             # Reusable UI Components  
│   │   ├── dashboard/          # Komponen UI Khusus Dashboard  
│   │   ├── landing/            # Komponen UI Khusus Landing Page  
│   │   └── ui/                 # Atomic UI Components  
│   ├── lib/                    # Utilitas & Services  
│   │   ├── finance.ts  
│   │   ├── optimize-image.ts  
│   │   ├── prisma.tsx  
│   │   ├── produk.ts  
│   │   ├── user.ts  
│   │   └── utils.ts  
│   └── proxy.ts                # Middleware / Proxy Handler  
├── .env.example                # Template Environment Variables  
├── eslint.config.mjs           # Konfigurasi Linter  
├── next.config.ts              # Konfigurasi Next.js  
├── package.json                # Dependencies & script proyek  
├── postcss.config.mjs          # Konfigurasi PostCSS  
├── prisma7.config.ts           # Konfigurasi Prisma 7  
└── tsconfig.json               # Konfigurasi TypeScript  

---

## ⚙️ Instalasi & Setup

### Prerequisites

Pastikan Anda telah menginstall:
- **Node.js** (v18.x atau lebih tinggi)
- **npm** / **yarn** / **pnpm**
- **PostgreSQL** (database)
- **Git**

### Langkah Instalasi

#### 1️⃣ Clone Repository
git clone [https://github.com/frevszz/LarisIn.git](https://github.com/frevszz/LarisIn.git)  
cd LarisIn  

#### 2️⃣ Install Dependencies
npm install  

#### 3️⃣ Setup Environment Variables
Buat file `.env` di root directory:

DATABASE_URL="postgresql://user:password@localhost:5432/mydb"  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  
CLERK_SECRET_KEY=  
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard  
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard  

#### 4️⃣ Setup Database
npx prisma generate  
npx prisma migrate dev  

#### 5️⃣ Run Development Server
npm run dev  

Aplikasi akan berjalan di `http://localhost:3000`

---

## 🚀 Penggunaan

### Menjalankan Aplikasi

npm run dev  
npm run build  
npm run start  
npm run test  
npm run lint  

### User Guide

#### Untuk Pengguna Umum

1. **Registrasi/Login**: Buka halaman aplikasi dan tekan tombol *Sign In/Sign Up* untuk masuk menggunakan akun Clerk.
2. **Pengelolaan Kasir (`/orders`)**: Masukkan produk ke dalam keranjang belanja, proses pesanan, dan cetak struk pembayaran digital.
3. **Pencatatan Stok (`/product` & `/stock`)**: Tambah, edit, atau hapus item barang dagangan beserta pemantauan jumlah stok tersisa.

#### Untuk Admin

1. **Akses Admin Panel**: Masuk ke halaman `/dashboard` untuk mengakses visualisasi performa bisnis.
2. **Laporan Keuangan (`/finance`)**: Catat transaksi pemasukan/pengeluaran luar kasir dan tentukan target finansial bulanan.
3. **Pengaturan Profil UMKM (`/profile-umkm`)**: Kelola informasi bisnis agar terverifikasi di halaman `/cek-umkm`.

---

## 📚 API Documentation

### Base URL

Development: http://localhost:3000/api  
Production : [https://larisin.vercel.app/api](https://larisin.vercel.app/api)  

### Endpoints

#### Authentication
Autentikasi dikelola secara independen melalui middleware Clerk.

#### Product
GET    /api/product          # Get all products  
POST   /api/product          # Create new product  
GET    /api/product/[id]     # Get product by ID  

#### Orders
GET    /api/orders           # Get all orders  
POST   /api/orders           # Create order  

#### Scan
GET    /api/scan/[barcode]   # Verify product barcode  

#### Finance & Target
GET    /api/finance          # Get finance records  
POST   /api/finance          # Create finance record  
GET    /api/target           # Get targets  
POST   /api/target           # Update target  

#### UMKM Profile
GET    /api/profileUmkm      # Get user UMKM profile  
GET    /api/umkm             # Get public UMKM profiles  

### Example Request

// Contoh Request Pembuatan Pesanan Baru  
const response = await fetch('/api/orders', {  
  method: 'POST',  
  headers: { 'Content-Type': 'application/json' },  
  body: JSON.stringify({  
    items: [  
      { productId: "prod_123", quantity: 2, price: 15000 }  
    ],  
    totalAmount: 30000,  
    paymentMethod: "CASH"  
  })  
});  

---

## 🧪 Testing

npm run test  
npm run test:coverage  

Pengujian aplikasi berfokus pada verifikasi integritas skema data Prisma, pemrosesan pesanan pada *API Routes*, serta otentikasi pendaftaran akun menggunakan Clerk.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - lihat file LICENSE untuk detail lebih lanjut.

---

<div align="center">

  **Made with ❤️ by IQ + KETENANGAN for ITECHNO CUP 2026**

</div>


