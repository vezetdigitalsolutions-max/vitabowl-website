"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Truck, Star, ArrowDown, Play } from "lucide-react"
import Logo from "./Logo"

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const rotatingTexts = [
    "Crispy. Natural. Delicious.",
    "Healthy. Tasty. Guilt-Free.",
    "Fresh. Pure. Satisfying."
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-red-200/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className={`relative z-20 p-4 md:p-8 max-w-5xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Professional Badge */}
        <div className="mb-4 md:mb-6">
          <Badge className="bg-primary/10 text-primary border border-primary/20 px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full">
            ✨ Premium Natural Snacks
          </Badge>
        </div>

        <Logo
          className="mb-4 md:mb-6 inline-flex justify-center drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
          textSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          imageWidth={60}
          imageHeight={60}
        />
        
        {/* Rotating Text */}
        <div className="h-12 sm:h-16 md:h-20 mb-4 md:mb-6">
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-md text-gray-800 transition-all duration-500 transform px-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {rotatingTexts[currentText]}
          </p>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 drop-shadow-sm text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
          India's first 100% natural veggie chips with zero preservatives. 
          <span className="font-semibold text-primary">Made fresh, delivered fresh!</span>
        </p>
        
        {/* Enhanced Feature badges with animations */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8 px-4">
          <div className="flex items-center gap-1 sm:gap-2 bg-white/90 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-200">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-green-800">100% Natural</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/90 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-red-200">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-red-700">No Preservatives</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/90 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Fresh Delivery</span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 px-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">4.9/5 from 500+ reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl font-semibold w-full sm:w-auto"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg font-medium w-full sm:w-auto"
            onClick={() => window.open('https://wa.me/919894789309?text=Hi%20Vitabowl!%20I%20would%20like%20to%20learn%20more%20about%20your%20products', '_blank')}
          >
            Contact Us
          </Button>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 sm:px-8 py-3 sm:py-4 inline-block shadow-lg border border-gray-200 mb-6 md:mb-8 mx-4">
          <span className="text-gray-700 font-medium text-xs sm:text-sm text-center block">
            <span className="hidden sm:inline">🚚 Free delivery on orders above ₹500 | 📞 24/7 customer support</span>
            <span className="sm:hidden">🚚 Free delivery above ₹500</span>
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </section>
  )
}
