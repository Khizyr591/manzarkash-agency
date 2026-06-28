import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Manzarkash Agency | Creative Digital Marketing & Web Engineering",
  description: "Premium digital marketing agency scaling Pakistani and international brands with hyper-optimized SEO, high-conversion paid ads, and custom Next.js web systems.",
  keywords: [
    "digital marketing agency Pakistan",
    "SEO agency Pakistan",
    "creative agency Karachi",
    "performance marketing",
    "Next.js developers",
    "bilingual copywriting",
    "brand identity design"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Manzarkash Agency",
    "image": "https://manzarkash.com/og-image.jpg",
    "@id": "https://manzarkash.com/#agency",
    "url": "https://manzarkash.com",
    "telephone": "+923000000000",
    "priceRange": "$$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Shahrah-e-Faisal",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "postalCode": "75400",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "85 Great Portland St",
        "addressLocality": "London",
        "postalCode": "W1W 7LT",
        "addressCountry": "GB"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/manzarkash",
      "https://twitter.com/manzarkash"
    ],
    "description": "Creative digital marketing and high-performance web engineering agency catering to local and international markets."
  };

  return (
    <html
      lang="en"
      className={`${michroma.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
