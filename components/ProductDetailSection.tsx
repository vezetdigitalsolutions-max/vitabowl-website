"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Product } from "@/lib/data"
import { getProductWhatsAppLink } from "@/lib/whatsapp"
import { useCart } from "@/components/CartProvider"
import { useEffect, useRef } from "react"

type ProductDetailSectionProps = {
  product: Product
}

export default function ProductDetailSection({ product }: ProductDetailSectionProps) {
  const { addToCart } = useCart()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to this section when the product changes, if it's not already in view
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [product])

  const handleOrderOnWhatsApp = () => {
    window.open(getProductWhatsAppLink(product), "_blank")
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
        Product Details
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <div className="relative w-full h-80 md:h-96 lg:h-auto lg:aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.fullDescription}</p>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Ingredients:</h4>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Nutritional Facts (per 100g):</h4>
            <Table className="w-full border rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-700">Item</TableHead>
                  <TableHead className="font-semibold text-gray-700">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.nutritionalFacts.map((fact, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{fact.item}</TableCell>
                    <TableCell>{fact.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Suggested Uses:</h4>
            <p className="text-gray-600">{product.suggestedUses}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 py-3 text-lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button size="lg" variant="secondary" className="flex-1 py-3 text-lg" onClick={handleOrderOnWhatsApp}>
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
