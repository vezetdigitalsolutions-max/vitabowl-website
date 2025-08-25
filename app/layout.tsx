import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google" // Import Montserrat
import "./globals.css"
import { CartProvider } from "@/components/CartProvider" // Import CartProvider
import { ToastProvider } from "@/components/ToastProvider" // Import ToastProvider

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define as CSS variable
  display: "swap",
})

// Define Viewport for mobile responsiveness and PWA-like experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FF8C00", // A shade of orange matching your brand for browser UI
}

export const metadata: Metadata = {
  title: {
    default: "Vitabowl - India's #1 Healthy Veggie Chips | 100% Natural Snacks",
    template: "%s | Vitabowl - Healthy Veggie Chips",
  },
  description:
    "Buy India's healthiest veggie chips online. 100% natural beetroot, carrot & avocado chips with no preservatives. Free delivery above ₹500. Order now!",
  keywords: [
    "healthy snacks India",
    "veggie chips online",
    "natural chips buy",
    "beetroot chips price",
    "carrot chips healthy",
    "avocado chips India",
    "no preservatives snacks",
    "vegan chips online",
    "gluten free snacks",
    "organic chips India",
    "healthy munching",
    "diet snacks",
    "nutritious chips",
    "Vitabowl chips",
    "premium snacks India"
  ],
  applicationName: "Vitabowl",
  authors: [{ name: "Vitabowl India" }],
  creator: "Vitabowl",
  publisher: "Vitabowl India",
  category: "Food & Beverages",
  classification: "Healthy Snacks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo-favicon.png',
    shortcut: '/logo-favicon.png',
    apple: '/logo-favicon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Vitabowl - India's #1 Healthy Veggie Chips | 100% Natural Snacks",
    description:
      "Buy India's healthiest veggie chips online. 100% natural beetroot, carrot & avocado chips with no preservatives. Free delivery above ₹500. Order now!",
    url: "https://vitabowl.vercel.app",
    siteName: "Vitabowl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vitabowl - India's Healthiest Veggie Chips",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitabowl - India's #1 Healthy Veggie Chips",
    description:
      "100% natural veggie chips with no preservatives. Free delivery above ₹500. Order healthy snacks online!",
    images: ["/og-image.jpg"],
    creator: "@myvitabowl",
  },
  alternates: {
    canonical: "https://vitabowl.vercel.app",
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo-favicon.png" type="image/png" sizes="16x16" />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <CartProvider>
          <ToastProvider>
            {/* ToastProvider wraps CartProvider for toast notifications */}
            {children}
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}
