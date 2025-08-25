"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { WHATSAPP_PHONE_NUMBER, CONTACT_EMAIL } from "@/lib/data"
import { ChevronLeft, Heart, Leaf, Users, Award, Target, MessageCircle, Mail } from "lucide-react"
import Logo from "@/components/Logo"

export default function AboutPageClient() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every chip is crafted with passion and care for your health"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial colors, preservatives, or harmful additives"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local farmers and building healthier communities"
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Premium ingredients and rigorous quality standards"
    }
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
            🌱 Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            About Vitabowl
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming healthy snacking with 100% natural veggie chips made with love in India
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Leaf className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Our Journey Begins</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vitabowl was born from a simple yet powerful vision: to create snacks that are both delicious and genuinely healthy. 
              In a market flooded with processed foods, we saw an opportunity to offer something different – something pure, natural, and nourishing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Starting from our kitchen with a passion for healthy living, we experimented with different vegetables and 
              perfected our unique dehydration process. Today, every bag of Vitabowl chips represents our commitment to 
              quality, health, and the belief that snacking can be both guilt-free and satisfying.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-100 text-green-800">🇮🇳 Made in India</Badge>
              <Badge className="bg-orange-100 text-orange-800">🥕 Farm Fresh</Badge>
              <Badge className="bg-blue-100 text-blue-800">❤️ Family Recipe</Badge>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We're on a mission to revolutionize snacking in India by making healthy choices accessible, affordable, and absolutely delicious. 
              Our goal is to replace processed snacks with natural alternatives that fuel your body and delight your taste buds.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through sustainable farming partnerships and eco-friendly practices, we're building a healthier future for our customers 
              and our planet. Every chip we make is a step towards a world where healthy snacking is the norm, not the exception.
            </p>
            <div className="flex items-center gap-4">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-lg font-semibold text-gray-800">Healthier India, One Snack at a Time</span>
            </div>
          </div>
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Target className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Our Mission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Vitabowl
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Vitabowl by Numbers</h2>
            <p className="text-lg text-gray-600">Our journey in numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Natural Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm md:text-base text-gray-600">Delicious Flavors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">0</div>
              <div className="text-sm md:text-base text-gray-600">Preservatives</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Connect!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our products? Want to share feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1DA851] shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}`, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(`mailto:${CONTACT_EMAIL}`, "_blank")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}