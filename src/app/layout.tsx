import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Norte JS",
  description: "Comunidade de desenvolvedores JavaScript e TypeScript do Norte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR" className="dark">
        <body className={`${inter.className} bg-gray-900 text-gray-100`}>{children}</body>
      </html>
  );
}
