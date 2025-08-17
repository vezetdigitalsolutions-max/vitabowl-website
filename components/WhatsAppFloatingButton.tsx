"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, MessageCircle } from "lucide-react"
import { useCart } from "@/components/CartProvider"
import CartSummaryModal from "./CartSummaryModal"
import { WHATSAPP_PHONE_NUMBER } from "@/lib/data" // Import WhatsApp number

export default function WhatsAppFloatingButton() {
  const { cartTotalItems } = useCart()
  const whatsappGeneralMessage = encodeURIComponent("Hi Vitabowl! I have a general question.")

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {cartTotalItems > 0 && (
        <CartSummaryModal>
          <Button
            size="lg"
            className="relative rounded-full w-16 h-16 shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            aria-label="View Cart"
          >
            <ShoppingCart className="h-8 w-8" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
              {cartTotalItems}
            </span>
            <span className="sr-only">View Cart</span>
          </Button>
        </CartSummaryModal>
      )}
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-xl bg-[#25D366] text-white hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-105"
        onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappGeneralMessage}`, "_blank")}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </div>
  )
}
