// app/layout.tsx
import Header from "./components/Header"; // Client Component
import Footer from "./components/Footer"; // Client Component
import IntlProviderWrapper from "./components/IntlProviderWrapper"; // Client Component for react-intl
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- Metadata (Server Component only) ---
export const metadata: Metadata = {
  title: "Almismar Alaswad Technical Services | Plumbing, Electrical & Professional Services",
  description: "Almismar Alaswad Technical Services provides professional plumbing, electrical, painting, tiling, plaster, electromechanical maintenance, ceilings, wallpaper fixing, and carpentry services for residential, commercial, and industrial projects.",
  keywords: [
    "Plumbing services",
    "Sanitation work",
    "Professional painting services",
    "Interior and exterior painting",
    "Floor and wall tiling",
    "Plaster works",
    "Electrical repair and maintenance",
    "Electromechanical maintenance",
    "Ceilings and partitions",
    "Wallpaper fixing services",
    "Carpentry and wood flooring",
    "Almismar Alaswad Technical Services"
  ],
  authors: [{ name: "Almismar Alaswad Technical Services", url: "https://www.almismar-alaswad.com/" }],
  viewport: { width: 'device-width', initialScale: 1 },
  themeColor: '#FCC417',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
  },
  openGraph: {
    title: "Almismar Alaswad Technical Services",
    description: "Offering expert plumbing, electrical, painting, tiling, plaster, electromechanical maintenance, ceilings, wallpaper, and carpentry services for all projects.",
    url: "https://www.almismar-alaswad.com/",
    siteName: "Almismar Alaswad Technical Services",
    images: [{ url: "/your-lower-image.svg", width: 1200, height: 630, alt: "Almismar Alaswad Technical Services" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almismar Alaswad Technical Services",
    description: "Expert plumbing, electrical, painting, tiling, plaster, electromechanical maintenance, ceilings, wallpaper, and carpentry services.",
    creator: "@your_twitter_handle",
    images: ["/your-lower-image.svg"]
  }
};

// --- JSON-LD Structured Data ---
const StructuredData = () => (
  <Script id="services-jsonld" type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Almismar Alaswad Technical Services",
      "image": "https://www.almismar-alaswad.com/your-lower-image.svg",
      "url": "https://www.almismar-alaswad.com/",
      "telephone": ["+971558956260", "+971552057197"],
      "email": "abdullahelian6@gmail.com",
      "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office M6-299, Al Khabeesi Building, Plot 128-246",
      "addressLocality": "Al Khabeesi",
      "addressRegion": "Dubai",
      "postalCode": "",
      "addressCountry": "AE"
      },
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.linkedin.com/company/yourpage",
        "https://twitter.com/your_twitter_handle"
      ],
      "priceRange": "AED",
      "areaServed": {
      "@type": "City",
      "name": "Dubai"
      },
      "makesOffer": [
        { "@type": "Offer", "itemOffered": "Plumbing and Sanitation Work" },
        { "@type": "Offer", "itemOffered": "Professional Painting Services" },
        { "@type": "Offer", "itemOffered": "Floor & Wall Tiling Works" },
        { "@type": "Offer", "itemOffered": "Plaster Works" },
        { "@type": "Offer", "itemOffered": "Electrical Repair & Maintenance" },
        { "@type": "Offer", "itemOffered": "Electromechanical Maintenance" },
        { "@type": "Offer", "itemOffered": "Ceilings & Partitions" },
        { "@type": "Offer", "itemOffered": "Professional Wallpaper Fixing" },
        { "@type": "Offer", "itemOffered": "Carpentry & Wood Flooring" }
      ]
    })}
  </Script>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Wrap client components */}
        <IntlProviderWrapper>
          <Header />
          
          {/* Offset for fixed header */}
          <div className="pt-30">
            <main className="flex-grow">{children}</main>
          </div>
          
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
