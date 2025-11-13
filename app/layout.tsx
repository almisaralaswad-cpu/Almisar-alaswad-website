// app/layout.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntlProviderWrapper from "./components/IntlProviderWrapper";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// =========================
//      METADATA (SEO)
// =========================
export const metadata: Metadata = {
  metadataBase: new URL("https://www.almismar-alaswad.com"),

  title: {
    default:
      "Almismar Alaswad Technical Services | Plumbing, Electrical, Painting & Maintenance in Dubai",
    template: "%s | Almismar Alaswad Technical Services Dubai",
  },

  description:
    "Almismar Alaswad Technical Services delivers expert plumbing, electrical, painting, tiling, plastering, electromechanical, carpentry, AC, wallpaper fixing, and maintenance services across Dubai and the UAE. Professional technicians with guaranteed service quality.",

  keywords: [
    "technical services Dubai",
    "plumbing Dubai",
    "electrical repair Dubai",
    "painting Dubai",
    "tiling Dubai",
    "maintenance Dubai",
    "plaster works Dubai",
    "AC repair Dubai",
    "carpentry Dubai",
    "wallpaper fixing Dubai",
    "electromechanical Dubai",
    "Almismar Alaswad",
  ],

  authors: [{ name: "Almismar Alaswad Technical Services", url: "https://www.almismar-alaswad.com" }],

  viewport: { width: "device-width", initialScale: 1 },

  themeColor: "#CF3D31",

  alternates: {
    canonical: "https://www.almismar-alaswad.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  // =========================
    //      OPEN GRAPH
    // =========================
    openGraph: {
      title: "Almismar Alaswad Technical Services Dubai",
      description:
        "Expert plumbing, electrical, painting, tiling, plaster, electromechanical maintenance, ceilings, wallpaper, and carpentry services in Dubai and the UAE.",
      url: "https://www.almismar-alaswad.com",
      siteName: "Almismar Alaswad Technical Services",
      images: [
        {
          url: "/your-lower-image.svg",
          width: 1200,
          height: 630,
          alt: "Almismar Alaswad Technical Services Dubai",
        },
      ],
      locale: "en_US",
      type: "website",
    },

  // =========================
  //        TWITTER
  // =========================
  twitter: {
    card: "summary_large_image",
    site: "@almismar",
    creator: "@almismar",
    title: "Almismar Alaswad Technical Services Dubai",
    description:
      "Professional maintenance services in Dubai – Plumbing, Electrical, Painting, Tiling, Carpentry and more.",
    images: ["/your-lower-image.svg"],
  },
};

// =========================
//   JSON-LD STRUCTURED DATA
// =========================
const StructuredData = () => (
  <>
    {/* LocalBusiness Schema */}
    <Script id="localbusiness-jsonld" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Almismar Alaswad Technical Services",
        image: "https://www.almismar-alaswad.com/your-lower-image.svg",
        url: "https://www.almismar-alaswad.com",
        telephone: ["+971558956260", "+971552057197"],
        email: "abdullahelian6@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Office M6-299, Al Khabeesi Building, Plot 128-246",
          addressLocality: "Al Khabeesi",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.276987",
          longitude: "55.296249",
        },

        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://www.linkedin.com/",
        ],

        priceRange: "AED",

        areaServed: {
          "@type": "City",
          name: "Dubai",
        },

        makesOffer: [
          { "@type": "Offer", itemOffered: "Plumbing and Sanitation Work" },
          { "@type": "Offer", itemOffered: "Professional Painting Services" },
          { "@type": "Offer", itemOffered: "Floor & Wall Tiling Works" },
          { "@type": "Offer", itemOffered: "Plaster Works" },
          { "@type": "Offer", itemOffered: "Electrical Repair & Maintenance" },
          { "@type": "Offer", itemOffered: "Electromechanical Maintenance" },
          { "@type": "Offer", itemOffered: "Ceilings & Partitions" },
          { "@type": "Offer", itemOffered: "Professional Wallpaper Fixing" },
          { "@type": "Offer", itemOffered: "Carpentry & Wood Flooring" },
        ],
      })}
    </Script>

    {/* WebSite Schema (Google Sitelinks) */}
    <Script id="website-jsonld" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Almismar Alaswad Technical Services",
        url: "https://www.almismar-alaswad.com",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.almismar-alaswad.com/?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })}
    </Script>
  </>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="bhldHU57EnRN1IQ5_gJ6Tr4TDCeUBjXG_VYuey2MmCw" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Inject SEO Schema */}
        <StructuredData />

        <IntlProviderWrapper>
          <Header />
          <div className="pt-30">
            <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
