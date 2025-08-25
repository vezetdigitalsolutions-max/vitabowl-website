"use client"

import Link from "next/link"
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WHATSAPP_PHONE_NUMBER, INSTAGRAM_HANDLE, CONTACT_EMAIL } from "@/lib/data"
import Logo from "./Logo"

export default function Footer() {
  const whatsappOrderMessage = encodeURIComponent("Hi Vitabowl! I'm interested in placing an order.")

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo textSize="text-2xl" className="mb-6" />
            <p className="text-lg text-gray-400 mb-6 max-w-md">
              Healthy, delicious veggie chips made with 100% natural ingredients. 
              Snack better, live better.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🌱 100% Natural
              </Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                🇮🇳 Made in India
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                ❤️ No Preservatives
              </Badge>
            </div>
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1DA851] shadow-lg hover:shadow-xl transition-all"
              onClick={() =>
                window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappOrderMessage}`, "_blank")
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/#products" className="hover:text-primary transition-colors duration-200 flex items-center">
                Our Products
              </Link>
              <Link href="/#why-choose" className="hover:text-primary transition-colors duration-200 flex items-center">
                Why Choose Us
              </Link>
              <Link href="/#sustainability" className="hover:text-primary transition-colors duration-200 flex items-center">
                Sustainability
              </Link>
              <Link href="/#testimonials" className="hover:text-primary transition-colors duration-200 flex items-center">
                Reviews
              </Link>
              <Link href="/#faqs" className="hover:text-primary transition-colors duration-200 flex items-center">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">+91 98947 89309</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Made with ❤️ in India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-[#25D366] p-3 rounded-full transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Vitabowl. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
