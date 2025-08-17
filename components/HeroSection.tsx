"use client"

import { Button } from "@/components/ui/button"
import Logo from "./Logo"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden bg-white px-4">
      <div className="relative z-20 p-4 md:p-8 max-w-4xl mx-auto w-full">
        <Logo
          className="mb-4 inline-flex justify-center drop-shadow-lg"
          textSize="text-4xl sm:text-5xl md:text-7xl"
          imageWidth={60}
          imageHeight={60}
        />
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 drop-shadow-md text-gray-800">
          Crispy. Natural. Delicious.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 drop-shadow-sm text-gray-700 max-w-2xl mx-auto">
          Wholesome veggie chips. Made in India. Delivered to your door.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
        >
          Shop Now
        </Button>
      </div>
    </section>
  )
}
