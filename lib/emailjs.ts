import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  website: string;
  service: string;
  market: string;
  budget: string;
  message: string;
}

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_q9zwskm",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dlmz17b",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "iaMf6ZhDmQKU5AA8G",
};

/**
 * Sends an admin notification email via EmailJS when a client submits the contact / audit request form.
 */
export async function sendAdminNotificationEmail(data: ContactFormData): Promise<boolean> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY;

  // Format budget for display in email
  const numBudget = parseInt(data.budget, 10) || 50000;
  let formattedBudget = `PKR ${numBudget.toLocaleString()}`;
  if (numBudget >= 500000) {
    formattedBudget = "PKR 500,000+ (5 Lac+)";
  } else if (numBudget >= 100000) {
    const lacs = (numBudget / 100000).toFixed(1).replace(/\.0$/, "");
    formattedBudget = `PKR ${numBudget.toLocaleString()} (${lacs} Lac)`;
  }

  // Format market for display
  const marketMap: Record<string, string> = {
    pakistan: "Pakistan Market (Domestic)",
    gulf: "Gulf / Middle East (UAE, KSA, GCC)",
    western: "Western Markets (US, UK, EU, Canada)",
    global: "Global / Cross-Border Audience",
    both: "Regional & International",
  };

  // Format service for display
  const serviceMap: Record<string, string> = {
    custom: "Custom Growth Solution",
    ecommerce: "E-Commerce Engineering",
    "marketing-ads": "Performance Ads & Marketing",
    seo: "SEO & Content Solutions",
    "production-video-ads": "Production & Video Ads",
    "product-visuals": "Product Visuals & Creatives",
    branding: "Branding & Identity Design",
    "social-media": "Social Media Handling",
    "whatsapp-automation": "WhatsApp Automation",
  };

  const selectedService = serviceMap[data.service] || data.service;

  const templateParams = {
    subject: `New Lead Request: ${data.name} — ${selectedService}`,
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    website_url: data.website || "Not provided",
    service_name: selectedService,
    target_market: marketMap[data.market] || data.market,
    budget_range: formattedBudget,
    message: data.message,
    submitted_at: new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }),
    to_email: "manzarkashdigitalagency@gmail.com",
    admin_recipient: "Manzarkash Leadership Team",
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send admin notification email via EmailJS:", error);
    return false;
  }
}
