import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CFDSJ9PLGP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CFDSJ9PLGP');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
