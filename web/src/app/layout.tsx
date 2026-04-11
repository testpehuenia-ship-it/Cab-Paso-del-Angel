import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Cabañas en Villa Pehuenia - El Paso del Ángel",
  description: "Cabañas de alta gama y Spa en Villa Pehuenia. Alquiler de cabañas frente al Lago Aluminé, Neuquén. Reserva directa con el mejor precio garantizado.",
  alternates: {
    canonical: "https://elpasodelangel.com.ar/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "El Paso del Ángel",
  "image": [
    "https://elpasodelangel.com.ar/assets/images/hero.webp",
    "https://elpasodelangel.com.ar/assets/images/cabin1.webp"
  ],
  "description": "Cabañas de Alta Gama y Spa en Villa Pehuenia frente al Lago Aluminé.",
  "url": "https://elpasodelangel.com.ar/",
  "telephone": "+54 9 2942 000000",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruta Provincial 11, Km 5",
    "addressLocality": "Villa Pehuenia",
    "addressRegion": "Neuquén",
    "postalCode": "8345",
    "addressCountry": "AR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "128"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Martín"
      },
      "datePublished": "2026-02-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Reservar desde su web fue súper fácil y además nos dieron una botella de vino local por reservar directo. La cabaña y la vista, un 10."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/assets/styles.css" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
