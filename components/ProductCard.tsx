"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/data"
import { useCart } from "@/components/CartProvider"
import { useToast } from "@/components/ToastProvider"
import CompleteOrderForm from "./CompleteOrderForm"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    if (!product.available) {
      showToast(`${product.name} is currently ${product.stockStatus || "out of stock"}.`, "error")
      return
    }
    addToCart(product)
    showToast(`${product.name} added to cart!`, "success")
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative max-w-sm mx-auto">

      {/* Image section */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden z-10">
        <Image
          src={product.image || "https://via.placeholder.com/400x400/FFDDC1/000000?text=Product+Image"}
          alt={product.name}
          fill
          className="transition-transform duration-300 hover:scale-105 object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content section with premium styling */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Product name with elegant typography */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat tracking-wide">{product.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed">{product.description}</p>

        {/* Badges with premium styling */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.badges.map((badge, index) => (
            <Badge
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/80 text-gray-800 border border-gray-300 shadow-sm backdrop-blur-sm"
            >
              {badge}
            </Badge>
          ))}
          {!product.available && (
            <Badge variant="destructive" className="text-xs px-3 py-1 rounded-full shadow-sm">
              {product.stockStatus || "Out of Stock"}
            </Badge>
          )}
        </div>

        {/* Price with premium styling */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-bold text-primary font-montserrat">₹{product.price}</span>
          <span className="text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-full">100g Pack</span>
        </div>

        {/* Buttons with premium styling */}
        <div className="flex flex-col gap-3 mt-auto">
          <CompleteOrderForm product={product}>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
              disabled={!product.available}
            >
              Order Now
            </Button>
          </CompleteOrderForm>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="secondary"
              className="flex-1 bg-white/80 hover:bg-white text-gray-800 font-medium py-2 rounded-xl shadow-md backdrop-blur-sm border border-gray-200 text-sm"
              onClick={handleAddToCart}
              disabled={!product.available}
            >
              Add to Cart
            </Button>
            <Link href={`/products/${product.id}`} passHref>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-medium py-2 rounded-xl shadow-md text-sm"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
