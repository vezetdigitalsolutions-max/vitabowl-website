"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const dummyOrders = [
  "🚚 An order just placed from Mumbai!",
  "📦 Avocado Chips shipped to Chennai!",
  "🎉 Beetroot Chips delivered to Delhi!",
  "✨ Carrot Chips on their way to Bangalore!",
  "🚀 Fresh order from Kolkata!",
]

export default function FomoBanner() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show banner after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 2000)

    // Rotate messages every 5 seconds
    const rotateTimer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % dummyOrders.length)
    }, 5000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(rotateTimer)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full bg-primary text-primary-foreground text-center py-2 text-sm md:text-base font-medium z-40 transition-transform duration-500 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {dummyOrders[currentMessageIndex]}
    </div>
  )
}
