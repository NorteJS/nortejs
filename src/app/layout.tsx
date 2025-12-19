import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nortejs.js.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Norte JS",
    template: "%s · Norte JS",
  },
  description: "Comunidade de desenvolvedores JavaScript e TypeScript do Norte",
  authors: [{ name: "NorteJS", url: SITE_URL }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.ico",
    apple: "/NorteJsMascote.jpeg",
  },
  openGraph: {
    title: "Norte JS",
    description: "Comunidade de desenvolvedores JavaScript e TypeScript do Norte",
    url: SITE_URL,
    siteName: "Norte JS",
    images: [
      {
        url: `${SITE_URL}/NorteJsMascote.jpeg`,
        width: 1200,
        height: 630,
        alt: "Norte JS",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norte JS",
    description: "Comunidade de desenvolvedores JavaScript e TypeScript do Norte",
    images: [`${SITE_URL}/NorteJsMascote.jpeg`],
  },
};

// Move themeColor to viewport export per Next.js docs
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
