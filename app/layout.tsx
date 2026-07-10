import type { Metadata } from "next";
import { Michroma, Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";

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
  title: "Manzarkash | Digital Marketing & Creative Agency for Pakistan & the UAE",
  description: "Karachi & Dubai digital agency scaling brands across Pakistan and the UAE with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
  keywords: [
    "digital marketing agency Karachi",
    "digital marketing agency Dubai",
    "product photography Karachi",
    "product photography Dubai",
    "SEO agency Pakistan",
    "SEO agency UAE",
    "ads campaign Karachi",
    "ads campaign Dubai",
    "whatsapp automation Pakistan",
    "whatsapp automation UAE",
    "custom e-commerce websites",
    "portfolio websites Karachi",
    "digital agency Pakistan",
    "digital agency UAE"
  ],
  metadataBase: new URL("https://manzarkash.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manzarkash | Digital Marketing & Creative Agency for Pakistan & the UAE",
    description: "Karachi & Dubai digital agency scaling brands across Pakistan and the UAE with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
    url: "https://manzarkash.com",
    siteName: "Manzarkash",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manzarkash - Digital Agency & Product Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzarkash | Digital Marketing & Creative Agency for Pakistan & the UAE",
    description: "Karachi & Dubai digital agency scaling brands across Pakistan and the UAE with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
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
    "name": "Manzarkash",
    "image": "https://manzarkash.com/og-image.jpg",
    "@id": "https://manzarkash.com/#production",
    "url": "https://manzarkash.com",
    "telephone": "+923313936011",
    "priceRange": "$$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "SB-9, 13/C Main University Rd, Block 13-C Gulshan-e-Iqbal",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "postalCode": "75300",
        "addressCountry": "PK"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Ducamz, Dubai Auto Zone Market, Ras Al Khor",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/manzarkash",
      "https://twitter.com/manzarkash"
    ],
    "description": "Karachi & Dubai digital agency scaling brands across Pakistan and the UAE with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation."
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
      </body>
    </html>
  );
}
