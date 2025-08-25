"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { WHATSAPP_PHONE_NUMBER, CONTACT_EMAIL } from "@/lib/data"
import Logo from "@/components/Logo"
import { ChevronLeft, Mail, MessageCircle, Clock, MapPin, Phone, Headphones } from "lucide-react"

export default function ContactPageClient() {
  const whatsappContactMessage = encodeURIComponent("Hi Vitabowl! I'd like to know more about your products.")

  const contactReasons = [
    { icon: "🛒", title: "Place an Order", desc: "Ready to try our delicious chips?" },
    { icon: "❓", title: "Product Questions", desc: "Learn about ingredients & nutrition" },
    { icon: "📦", title: "Order Support", desc: "Track your order or need help?" },
    { icon: "💼", title: "Business Inquiries", desc: "Wholesale or partnership opportunities" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Logo textSize="text-xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            💬 Support Center
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Whether you have questions about our products or need assistance with your order, 
            our friendly team is ready to assist you.
          </p>
        </div>

        {/* Contact Reasons */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="text-3xl mb-3">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-10 w-10 text-[#25D366]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">WhatsApp Chat</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get instant responses! Chat with our team for quick questions, order assistance, 
                or product recommendations. Available 9 AM - 9 PM.
              </p>
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>+91 98947 89309</span>
              </div>
              <Button
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1DA851] shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                onClick={() =>
                  window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappContactMessage}`, "_blank")
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start WhatsApp Chat
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Email Support</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For detailed inquiries, business partnerships, or feedback, send us an email. 
                We'll get back to you within 24 hours.
              </p>
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-500">
                <Mail className="h-4 w-4" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                onClick={() => window.open(`mailto:${CONTACT_EMAIL}`, "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center border-0 shadow-md">
            <CardContent className="p-0">
              <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">WhatsApp: Instant<br />Email: Within 24 hours</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center border-0 shadow-md">
            <CardContent className="p-0">
              <Headphones className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Support Hours</h3>
              <p className="text-sm text-gray-600">Monday - Sunday<br />9:00 AM - 9:00 PM</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center border-0 shadow-md">
            <CardContent className="p-0">
              <MapPin className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-sm text-gray-600">Made with ❤️<br />in India</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Link */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Looking for Quick Answers?</h3>
          <p className="text-gray-600 mb-6">Check out our FAQ section for instant answers to common questions.</p>
          <Link href="/#faqs">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
              View FAQs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}