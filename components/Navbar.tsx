"use client"

import { useState } from "react" // Import useState
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu } from "lucide-react"
import { useCart } from "@/components/CartProvider"
import CartSummaryModal from "./CartSummaryModal"
import Logo from "./Logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const { cartTotalItems } = useCart()
  const [isSheetOpen, setIsSheetOpen] = useState(false) // State to control sheet open/close

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 max-w-7xl">
        <Logo textSize="text-xl sm:text-2xl" imageWidth={32} imageHeight={32} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
          >
            Contact Us
          </Link>
          <Link
            href="/#faqs"
            className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
          >
            FAQs
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <CartSummaryModal>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              {cartTotalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  {cartTotalItems}
                </span>
              )}
              <span className="sr-only">View Cart</span>
            </Button>
          </CartSummaryModal>

          {/* Mobile Menu Toggle */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] p-6">
              <div className="mb-8">
                <Logo textSize="text-2xl" />
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#products"
                  className="text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/#faqs"
                  className="text-gray-700 hover:text-primary font-medium text-lg transition-colors py-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  FAQs
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
