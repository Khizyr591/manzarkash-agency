import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./styles/globals.css";

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
  title: "Manzarkash Production | Karachi's Premier Digital Marketing & Creative Agency",
  description: "Karachi-based digital agency scaling brands with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
  keywords: [
    "digital marketing agency Karachi",
    "product photography Karachi",
    "SEO agency Pakistan",
    "ads campaign Karachi",
    "whatsapp automation Pakistan",
    "custom e-commerce websites",
    "portfolio websites Karachi",
    "digital agency Pakistan"
  ],
  metadataBase: new URL("https://manzarkash.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manzarkash Production | Karachi's Premier Digital Marketing & Creative Agency",
    description: "Karachi-based digital agency scaling brands with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
    url: "https://manzarkash.com",
    siteName: "Manzarkash Production",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manzarkash Production - Digital Agency & Product Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzarkash Production | Karachi's Premier Digital Marketing & Creative Agency",
    description: "Karachi-based digital agency scaling brands with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
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
    "name": "Manzarkash Production",
    "image": "https://manzarkash.com/og-image.jpg",
    "@id": "https://manzarkash.com/#production",
    "url": "https://manzarkash.com",
    "telephone": "+923313936011",
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
    "description": "Karachi-based digital agency scaling brands with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation."
  };

  return (
    <html
      lang="en"
      className={`${michroma.variable} ${poppins.variable} h-full antialiased dark`}
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
