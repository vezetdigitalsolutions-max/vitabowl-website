"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Mail, Percent } from "lucide-react"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you'd send this email to a backend service
      setIsSubmitted(true)
      setEmail("") // Clear input
      alert("Welcome to the Vitabowl family! Check your email for exclusive offers.")
    }
  }

  const benefits = [
    { icon: Percent, text: "Exclusive discounts & early access" },
    { icon: Gift, text: "Free samples of new flavors" },
    { icon: Mail, text: "Healthy snacking tips & recipes" },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl text-center border border-gray-100">
        <Badge className="mb-3 md:mb-4 bg-primary/10 text-primary hover:bg-primary/10 text-sm">
          🎉 VIP Club
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800 px-4">
          Join Our Snack Club!
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto px-4">
          Be the first to know about new flavors, get exclusive discounts, and receive healthy snacking tips straight to your inbox.
        </p>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-2 md:gap-3 bg-white/80 rounded-lg p-3 md:p-4 shadow-sm">
              <benefit.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{benefit.text}</span>
            </div>
          ))}
        </div>
        
        {isSubmitted ? (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Club!</h3>
            <p className="text-gray-600">Check your inbox for exclusive offers and healthy snacking tips.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow p-3 md:p-4 rounded-lg text-gray-800 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:ring-0 text-sm md:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Now
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3 md:mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
