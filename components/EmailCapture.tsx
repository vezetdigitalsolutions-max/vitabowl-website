"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you'd send this email to a backend service
      setIsSubmitted(true)
      setEmail("") // Clear input
      alert("Thanks for joining our snack club! You'll receive deals and healthy tips.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-gray-800">Join Our Snack Club!</h2>
        <p className="text-lg mb-8 text-gray-700">Give us your mail to get deals and healthy tips.</p>
        {isSubmitted ? (
          <p className="text-xl font-semibold text-primary">You're in! Check your inbox for updates.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-lg text-gray-800 bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
