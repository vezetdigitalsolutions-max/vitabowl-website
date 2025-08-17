"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WHATSAPP_PHONE_NUMBER, CONTACT_EMAIL } from "@/lib/data"
import Logo from "@/components/Logo"
import { ChevronLeft, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const whatsappContactMessage = encodeURIComponent("Hi Vitabowl! I'd like to know more about your products.")

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium">
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        <Logo textSize="text-xl" />
      </div>
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 text-gray-800">Get in Touch</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Have questions about our delicious chips, an order, or just want to say hello? We'd love to hear from you!
          Reach out to us through the options below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <MessageCircle className="h-12 w-12 text-[#25D366] mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Chat on WhatsApp</h2>
            <p className="text-gray-600 mb-4">For quick inquiries and order assistance, chat with us directly.</p>
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1DA851] py-3 text-lg"
              onClick={() =>
                window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappContactMessage}`, "_blank")
              }
            >
              Start Chat
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Email Us</h2>
            <p className="text-gray-600 mb-4">For detailed questions or business inquiries, send us an email.</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Button
                size="lg"
                variant="outline"
                className="py-3 text-lg bg-transparent border-primary text-primary hover:bg-primary/10"
              >
                Send Email
              </Button>
            </a>
          </div>
        </div>

        <p className="text-md text-gray-500 mt-8">We aim to respond to all inquiries within 24-48 hours.</p>
      </div>
    </div>
  )
}
