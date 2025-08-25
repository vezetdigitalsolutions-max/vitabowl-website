"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Star, Shield, Truck, Heart, Leaf, Award } from "lucide-react"
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

  const benefits = [
    { icon: Leaf, title: "100% Natural", desc: "No artificial additives" },
    { icon: Heart, title: "Heart Healthy", desc: "Rich in antioxidants" },
    { icon: Shield, title: "No Preservatives", desc: "Pure & fresh always" },
    { icon: Award, title: "Premium Quality", desc: "Carefully selected ingredients" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
            <ChevronLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Logo textSize="text-xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Product Hero */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">
            ✨ Premium Product
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">4.9/5 (150+ reviews)</span>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-50 to-green-50">
              <Image
                src={product.image || "https://via.placeholder.com/800x800/FFDDC1/000000?text=Product+Detail+Image"}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.available && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ✓ In Stock
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-gray-500 line-through">₹{product.price + 50}</span>
                <Badge className="bg-red-500 text-white">Save ₹50</Badge>
              </div>
              <p className="text-gray-600 mb-4">100g Pack | Free shipping on orders above ₹500</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge, index) => (
                <Badge key={index} className="bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </Badge>
              ))}
              {!product.available && (
                <Badge variant="destructive">{product.stockStatus || "Out of Stock"}</Badge>
              )}
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <benefit.icon className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">{benefit.title}</div>
                    <div className="text-xs text-gray-600">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" 
                  onClick={handleAddToCart} 
                  disabled={!product.available}
                >
                  Add to Cart - ₹{product.price}
                </Button>
              </div>
              <CompleteOrderForm product={product}>
                <Button
                  size="lg"
                  className="w-full py-4 text-lg bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg hover:shadow-xl transition-all font-semibold"
                  disabled={!product.available}
                >
                  📱 Order via WhatsApp
                </Button>
              </CompleteOrderForm>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>100% Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                Ingredients
              </h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">{product.ingredients}</p>
              </div>
            </CardContent>
          </Card>

          {/* Nutritional Facts */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                Nutrition (per 100g)
              </h3>
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-blue-50">
                    <TableHead className="font-bold text-blue-800">Nutrient</TableHead>
                    <TableHead className="font-bold text-blue-800">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.nutritionalFacts.map((fact, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{fact.item}</TableCell>
                      <TableCell className="font-semibold text-primary">{fact.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Suggested Uses */}
        <Card className="mt-8 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              How to Enjoy
            </h3>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700 text-lg leading-relaxed">{product.suggestedUses}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
