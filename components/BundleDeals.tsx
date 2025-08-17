"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { products } from "@/lib/data"
import { useCart } from "@/components/CartProvider"
import { getBundleWhatsAppLink } from "@/lib/whatsapp"

export default function BundleDeals() {
  const [selectedBundleProducts, setSelectedBundleProducts] = useState<string[]>([])
  const { addToCart } = useCart()

  const handleCheckboxChange = (productId: string, checked: boolean) => {
    setSelectedBundleProducts((prev) => {
      if (checked) {
        if (prev.length < 3) {
          return [...prev, productId]
        } else {
          // Optionally, alert user they can only select 3
          alert("You can only select up to 3 products for the bundle.")
          return prev
        }
      } else {
        return prev.filter((id) => id !== productId)
      }
    })
  }

  const handleAddBundleToCart = () => {
    if (selectedBundleProducts.length !== 3) {
      alert("Please select exactly 3 products for the bundle.")
      return
    }
    const bundleProducts = selectedBundleProducts.map((id) => products.find((p) => p.id === id)!)
    // Add each product in the bundle as a separate item to cart for simplicity,
    // or create a special "bundle" item if more complex logic is needed.
    bundleProducts.forEach((product) => addToCart(product, 1))
    alert("Bundle added to cart!")
    setSelectedBundleProducts([]) // Clear selection after adding to cart
  }

  const handleOrderBundleOnWhatsApp = () => {
    if (selectedBundleProducts.length !== 3) {
      alert("Please select exactly 3 products for the bundle before ordering.")
      return
    }
    const bundleProducts = selectedBundleProducts.map((id) => products.find((p) => p.id === id)!)
    window.open(getBundleWhatsAppLink(bundleProducts), "_blank")
    setSelectedBundleProducts([]) // Clear selection after ordering
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">Bundle & Save!</h2>
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Mix Any 3 Packs for ₹399</h3>
        <p className="text-gray-700 text-lg mb-8">
          Select your favorite three flavors to create your perfect snack bundle!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4 border rounded-lg bg-gray-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={120}
                height={120}
                className="rounded-full mb-3 object-cover"
              />
              <Label htmlFor={`bundle-${product.id}`} className="text-lg font-medium text-gray-800 mb-2 cursor-pointer">
                {product.name}
              </Label>
              <Checkbox
                id={`bundle-${product.id}`}
                checked={selectedBundleProducts.includes(product.id)}
                onCheckedChange={(checked) => handleCheckboxChange(product.id, checked as boolean)}
                className="w-6 h-6"
                disabled={selectedBundleProducts.length === 3 && !selectedBundleProducts.includes(product.id)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="py-3 text-lg"
            onClick={handleAddBundleToCart}
            disabled={selectedBundleProducts.length !== 3}
          >
            Add Bundle to Cart
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="py-3 text-lg"
            onClick={handleOrderBundleOnWhatsApp}
            disabled={selectedBundleProducts.length !== 3}
          >
            Order this Bundle on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}
