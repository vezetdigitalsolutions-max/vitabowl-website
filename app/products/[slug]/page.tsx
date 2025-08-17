"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Logo from "@/components/Logo"
import { useCart } from "@/components/CartProvider"
import { useToast } from "@/components/ToastProvider"
import CompleteOrderForm from "@/components/CompleteOrderForm"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug)
  const { addToCart } = useCart()
  const { showToast } = useToast()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (!product.available) {
      showToast(`${product.name} is currently ${product.stockStatus || "out of stock"}.`, "error")
      return
    }
    addToCart(product)
    showToast(`${product.name} added to cart!`, "success")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-primary hover:underline font-medium">
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
        <Logo textSize="text-xl" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">{product.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <div
          className="relative w-full h-80 md:h-96 lg:h-auto lg:aspect-square overflow-hidden rounded-lg"
          style={{ backgroundColor: "#F5F1E8" }}
        >
          <Image
            src={product.image || "https://via.placeholder.com/800x800/FFDDC1/000000?text=Product+Detail+Image"}
            alt={product.name}
            fill
            className="rounded-lg object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.badges.map((badge, index) => (
              <Badge
                key={index}
                className="text-sm px-3 py-1 rounded-full bg-white text-gray-800 border border-gray-200"
              >
                {badge}
              </Badge>
            ))}
            {!product.available && (
              <Badge variant="destructive" className="text-sm px-3 py-1 rounded-full">
                {product.stockStatus || "Out of Stock"}
              </Badge>
            )}
          </div>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.fullDescription}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients:</h3>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Nutritional Facts (per 100g):</h3>
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
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Suggested Uses:</h3>
            <p className="text-gray-600">{product.suggestedUses}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 py-3 text-lg" onClick={handleAddToCart} disabled={!product.available}>
              Add to Cart
            </Button>
            <CompleteOrderForm product={product}>
              <Button
                size="lg"
                variant="secondary"
                className="flex-1 py-3 text-lg bg-[#25D366] hover:bg-[#1DA851] text-white"
                disabled={!product.available}
              >
                Order on WhatsApp
              </Button>
            </CompleteOrderForm>
          </div>
        </div>
      </div>
    </div>
  )
}
