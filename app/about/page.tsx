import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Vitabowl - India's Healthiest Veggie Chips Story",
  description: "Learn about Vitabowl's mission to create India's healthiest veggie chips. 100% natural ingredients, no preservatives, made with love. Our story, values & commitment to healthy snacking.",
  keywords: ["Vitabowl story", "healthy snacks company", "natural chips India", "about Vitabowl", "veggie chips mission"],
  openGraph: {
    title: "About Vitabowl - India's Healthiest Veggie Chips Story",
    description: "Learn about Vitabowl's mission to create India's healthiest veggie chips with 100% natural ingredients.",
    url: "https://vitabowl.vercel.app/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
