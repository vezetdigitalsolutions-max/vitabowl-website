"use client"

import Link from "next/link"
import { MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_PHONE_NUMBER, INSTAGRAM_HANDLE } from "@/lib/data"
import Logo from "./Logo" // Import Logo

export default function Footer() {
  const whatsappOrderMessage = encodeURIComponent("Hi Vitabowl! I'm interested in placing an order.")

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <Logo textSize="text-xl sm:text-2xl" className="mb-4 mx-auto md:mx-0" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to snack better?</h3>
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1DA851] py-3 text-base sm:text-lg w-full sm:w-auto"
              onClick={() =>
                window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappOrderMessage}`, "_blank")
              }
            >
              Order on WhatsApp
            </Button>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Contact Us
              </Link>
              <Link href="#faqs" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                FAQs
              </Link>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </a>
            </div>
            <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Vitabowl. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
