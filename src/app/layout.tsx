import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prodej bytu 4+kk | Příhodova, Chýně",
  description:
    "Vzdušný mezonetový byt 4+kk v novostavbě na ulici Příhodova v Chýni. 80 m², osobní vlastnictví.",
  openGraph: {
    title: "Prodej bytu 4+kk | Příhodova, Chýně",
    description:
      "Vzdušný mezonetový byt 4+kk v novostavbě na ulici Příhodova v Chýni. 80 m², osobní vlastnictví.",
    images: ["/og-image.jpg"],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
