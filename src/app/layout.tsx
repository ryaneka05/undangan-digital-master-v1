import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import config from "@/config/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: config.data.title,
  description: config.data.description,
  openGraph: {
    title: config.data.title,
    description: config.data.description,
    url: "",
    siteName: "",
    images: [
      {
        url: config.data.ogImage,
        width: 1200,
        height: 630,
        alt: "",
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.data.title,
    description: config.data.description,
    images: [config.data.ogImage],
  },
  icons: {
    icon: config.data.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
