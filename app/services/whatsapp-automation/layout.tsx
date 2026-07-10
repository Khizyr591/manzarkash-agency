import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Automation & Cloud API Bots | Manzarkash",
  description:
    "WhatsApp Cloud API automation for Pakistan and UAE brands. Order confirmation bots, catalog delivery flows, CRM-synced customer support, and 24/7 conversational commerce funnels.",
  alternates: { canonical: "/services/whatsapp-automation" },
  openGraph: {
    title: "WhatsApp Automation & Cloud API Bots — Manzarkash",
    description:
      "Order confirmation, catalog, and CRM-synced support bots for Pakistan & UAE brands.",
    url: "https://manzarkash.com/services/whatsapp-automation",
    type: "website",
  },
};

export default function WhatsAppAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
