import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import HeroCursor from "@/components/ui/HeroCursor";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Manzarkash Digital Agency | Performance Marketing & Web Engineering Pakistan",
  description: "Manzarkash Digital Agency scales brand ventures in Pakistan with high-ROI advertising campaigns, search engine optimization (SEO), custom e-commerce web development, and smart WhatsApp automation.",
  keywords: [
    "digital marketing agency Pakistan",
    "growth marketing Pakistan",
    "performance marketing agency Pakistan",
    "SEO agency Pakistan",
    "ads campaign Pakistan",
    "whatsapp automation Pakistan",
    "custom e-commerce websites",
    "portfolio websites Pakistan",
    "digital agency Pakistan"
  ],
  metadataBase: new URL("https://manzarkash.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manzarkash Digital Agency | Performance Marketing & Web Engineering Pakistan",
    description: "Manzarkash Digital Agency scales brand ventures in Pakistan with high-ROI advertising campaigns, search engine optimization (SEO), custom e-commerce web development, and smart WhatsApp automation.",
    url: "https://manzarkash.com",
    siteName: "Manzarkash Digital Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manzarkash Digital Agency - Performance Marketing & Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzarkash Digital Agency | Performance Marketing & Web Engineering Pakistan",
    description: "Manzarkash Digital Agency scales brand ventures in Pakistan with high-ROI advertising campaigns, search engine optimization (SEO), custom e-commerce web development, and smart WhatsApp automation.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Manzarkash Digital Agency",
    "image": "https://manzarkash.com/og-image.jpg",
    "@id": "https://manzarkash.com/#agency",
    "url": "https://manzarkash.com",
    "telephone": "+923313936011",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SB-9, 13/C Main University Rd, Block 13-C Gulshan-e-Iqbal",
      "addressLocality": "Pakistan",
      "postalCode": "75300",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.linkedin.com/company/manzarkash",
      "https://twitter.com/manzarkash"
    ],
    "description": "Manzarkash Digital Agency scales brand ventures in Pakistan with high-ROI advertising campaigns, search engine optimization (SEO), custom e-commerce web development, and smart WhatsApp automation."
  };

  return (
    <html
      lang="en"
      className={`${michroma.variable} ${poppins.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader>{children}</Preloader>
        <HeroCursor />
      </body>
    </html>
  );
}
