"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, Phone, Star } from "lucide-react"
import { useCart } from "@/components/CartProvider"
import CartSummaryModal from "./CartSummaryModal"
import Logo from "./Logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const { cartTotalItems } = useCart()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white py-2 px-2 text-center text-xs sm:text-sm">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-300 text-yellow-300" />
          <span className="font-medium">
            <span className="hidden sm:inline">Free shipping on orders above ₹500 | Premium quality guaranteed</span>
            <span className="sm:hidden">Free shipping above ₹500</span>
          </span>
          <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>
      </div>
      
      <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-white/95 via-orange-50/95 to-green-50/95 backdrop-blur-md border-b-2 border-gradient-to-r from-orange-200 to-green-200 shadow-lg">
        <div className="container mx-auto h-16 sm:h-18 flex items-center justify-between px-3 sm:px-4 max-w-7xl py-2 sm:py-3">
          <div className="flex items-center gap-4">
            <Logo textSize="text-lg sm:text-xl md:text-2xl" imageWidth={36} imageHeight={36} className="sm:w-12 sm:h-12 hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-primary font-semibold transition-all duration-300 text-base group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#products"
              className="relative text-gray-700 hover:text-primary font-semibold transition-all duration-300 text-base group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-primary font-semibold transition-all duration-300 text-base group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-primary font-semibold transition-all duration-300 text-base group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#faqs"
              className="relative text-gray-700 hover:text-primary font-semibold transition-all duration-300 text-base group"
            >
              FAQs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Order Now Button */}
            <Button 
              size="sm" 
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-white font-semibold px-4 lg:px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shop Now
            </Button>
            
            {/* Cart */}
            <CartSummaryModal>
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 rounded-full transition-all duration-300 p-2">
                <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                    {cartTotalItems}
                  </span>
                )}
                <span className="sr-only">View Cart</span>
              </Button>
            </CartSummaryModal>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 rounded-full transition-all duration-300 p-2" aria-label="Open menu">
                  <Menu className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="bg-gradient-to-b from-primary/5 to-white h-full">
                  <div className="p-6 border-b">
                    <Logo textSize="text-2xl" />
                    <p className="text-sm text-gray-600 mt-2">Healthy snacking made simple</p>
                  </div>
                  <nav className="flex flex-col p-6 space-y-4">
                    <Link
                      href="/"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-semibold text-lg transition-all duration-300 py-3 px-4 rounded-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      🏠 Home
                    </Link>
                    <Link
                      href="/#products"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-semibold text-lg transition-all duration-300 py-3 px-4 rounded-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      🥕 Products
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-semibold text-lg transition-all duration-300 py-3 px-4 rounded-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      ℹ️ About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-semibold text-lg transition-all duration-300 py-3 px-4 rounded-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      📞 Contact
                    </Link>
                    <Link
                      href="/#faqs"
                      className="flex items-center gap-3 text-gray-700 hover:text-primary hover:bg-primary/5 font-semibold text-lg transition-all duration-300 py-3 px-4 rounded-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      ❓ FAQs
                    </Link>
                  </nav>
                  <div className="p-6 border-t mt-auto">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
                      onClick={() => {
                        setIsSheetOpen(false)
                        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      🛒 Order Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
