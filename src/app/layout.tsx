import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://laris-in.vercel.app"), // Sesuaikan dengan domain / URL produksi utama Anda
  title: "LarisIn — Platform POS & Manajemen UMKM",
  description:
    "LarisIn adalah aplikasi Point of Sale (POS) dan manajemen operasional untuk membantu UMKM mengelola penjualan, inventaris, dan transaksi dengan lebih efisien.",
  openGraph: {
    title: "LarisIn — Platform POS & Manajemen UMKM",
    description:
      "Kelola bisnis dan penjualan UMKM Anda lebih praktis dengan LarisIn. Nikmati fitur kasir modern, pencatatan transaksi, hingga manajemen stok.",
    url: "https://laris-in.vercel.app/",
    siteName: "LarisIn",
    images: [
      {
        url: "/og-larisin.png",
        width: 1200,
        height: 630,
        alt: "LarisIn - POS & Manajemen UMKM",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LarisIn — Platform POS & Manajemen UMKM",
    description:
      "Solusi kasir digital dan manajemen usaha praktis untuk meningkatkan efisiensi bisnis UMKM Anda.",
    images: ["/og-larisin.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="id" data-scroll-behavior="smooth">
        <body
          className={`${dmSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-900`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
