import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Vitabowl - Get in Touch for Healthy Veggie Chips",
  description: "Contact Vitabowl for orders, support & inquiries. WhatsApp: +91 98947 89309 | Email: vitabowl7676@gmail.com | 24/7 customer support for healthy veggie chips.",
  keywords: ["contact Vitabowl", "veggie chips support", "healthy snacks contact", "Vitabowl customer service"],
  openGraph: {
    title: "Contact Vitabowl - Get in Touch for Healthy Veggie Chips",
    description: "Contact Vitabowl for orders, support & inquiries. 24/7 customer support available.",
    url: "https://vitabowl.vercel.app/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
