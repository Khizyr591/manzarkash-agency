import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Manzarkash Digital Agency — Pakistan",
  description:
    "Get in touch with Manzarkash Digital Agency. Live WhatsApp response from our Pakistan office. Book a discovery call, request a scope, or send a project brief.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Manzarkash Digital Agency — Pakistan",
    description:
      "Live WhatsApp response from our Pakistan office. Book a discovery call or send a brief.",
    url: "https://manzarkash.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
