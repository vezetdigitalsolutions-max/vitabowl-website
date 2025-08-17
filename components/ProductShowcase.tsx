"use client"

import { products } from "@/lib/data"
import ProductCard from "./ProductCard"

export default function ProductShowcase() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Our Wholesome Chips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
