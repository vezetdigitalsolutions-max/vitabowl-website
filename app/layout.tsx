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
    default: "Vitabowl - Crispy. Natural. Delicious. Veggie Chips",
    template: "%s | Vitabowl", // Allows dynamic titles for other pages
  },
  description:
    "Wholesome veggie chips. Made in India. Delivered to your door. Explore Beetroot, Carrot, and Avocado chips. Healthy, natural, and delicious snacks.",
  keywords: [
    "Vitabowl",
    "healthy snacks",
    "veggie chips",
    "natural chips",
    "made in India",
    "gluten-free",
    "vegan snacks",
    "beetroot chips",
    "carrot chips",
    "avocado chips",
    "crispy snacks",
    "delicious snacks",
  ],
  applicationName: "Vitabowl Website",
  authors: [{ name: "Vitabowl Team" }], // Add your team/company name
  creator: "Vitabowl Team",
  publisher: "Vitabowl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/vitabowl-logo-graphic.png", // Favicon for browser tabs
    shortcut: "/images/vitabowl-logo-graphic.png",
    apple: "/images/vitabowl-logo-graphic.png", // Apple touch icon for iOS home screen
    other: [
      {
        rel: "mask-icon",
        url: "/images/vitabowl-logo-graphic.png", // Safari pinned tab icon
        color: "#FF8C00",
      },
    ],
  },
  openGraph: {
    title: "Vitabowl - Crispy. Natural. Delicious. Veggie Chips",
    description:
      "Wholesome veggie chips. Made in India. Delivered to your door. Explore Beetroot, Carrot, and Avocado chips. Healthy, natural, and delicious snacks.",
    url: "https://vitabowl.vercel.app", // Replace with actual domain
    siteName: "Vitabowl",
    images: [
      {
        url: "/images/vitabowl-logo-graphic.png", // Use your logo for Open Graph
        width: 500, // Adjust width/height as needed for social sharing
        height: 500,
        alt: "Vitabowl Logo - Crispy Natural Delicious Veggie Chips",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitabowl - Crispy. Natural. Delicious. Veggie Chips",
    description:
      "Wholesome veggie chips. Made in India. Delivered to your door. Explore Beetroot, Carrot, and Avocado chips. Healthy, natural, and delicious snacks.",
    images: ["/images/vitabowl-logo-graphic.png"], // Use your logo for Twitter card
    creator: "@vitabowll", // Replace with your Twitter handle if you have one
  },
  alternates: {
    canonical: "https://vitabowl.vercel.app", // Replace with actual domain
    // Add other social links here if they have specific meta tags
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
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
