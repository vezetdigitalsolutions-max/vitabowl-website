"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WHATSAPP_PHONE_NUMBER, products } from "@/lib/data"
import type { Product } from "@/lib/data"
import type { CartItem } from "@/lib/whatsapp"
import { Plus, Minus, X } from "lucide-react"
import Image from "next/image"

type OrderDetailsModalProps = {
  children: React.ReactNode
  product?: Product
  cartItems?: CartItem[]
  onOrderComplete?: () => void
}

type OrderDetails = {
  name: string
  phone: string
  address: string
  paymentMode: "upi" | "cod"
}

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function OrderDetailsModal({ children, product, cartItems, onOrderComplete }: OrderDetailsModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    name: "",
    phone: "",
    address: "",
    paymentMode: "cod",
  })
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize order items when modal opens
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      if (product) {
        // Single product order
        setOrderItems([
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
          },
        ])
      } else if (cartItems && cartItems.length > 0) {
        // Cart order
        setOrderItems(
          cartItems.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
        )
      }
    }
  }

  const handleInputChange = (field: keyof OrderDetails, value: string) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }))
  }

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
      return
    }
    setOrderItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const addProduct = (productToAdd: Product) => {
    const existingItem = orderItems.find((item) => item.id === productToAdd.id)
    if (existingItem) {
      updateItemQuantity(productToAdd.id, existingItem.quantity + 1)
    } else {
      setOrderItems((prev) => [
        ...prev,
        {
          id: productToAdd.id,
          name: productToAdd.name,
          price: productToAdd.price,
          quantity: 1,
          image: productToAdd.image,
        },
      ])
    }
  }

  const getTotalAmount = () => {
    return orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const generateWhatsAppMessage = () => {
    let message = "🛒 *New Order from Vitabowl Website*\n\n"

    // Customer Details
    message += "👤 *Customer Details:*\n"
    message += `Name: ${orderDetails.name}\n`
    message += `Phone: ${orderDetails.phone}\n`
    message += `Address: ${orderDetails.address}\n`
    message += `Payment Mode: ${orderDetails.paymentMode.toUpperCase()}\n\n`

    // Order Details
    message += "📦 *Order Details:*\n"
    orderItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - ₹${item.price * item.quantity}\n`
    })

    const total = getTotalAmount()
    message += `\n💰 *Total Amount: ₹${total}*\n`
    message += "\n✅ Please confirm this order and we'll process it immediately!"

    return encodeURIComponent(message)
  }

  const handleSubmitOrder = () => {
    if (!orderDetails.name.trim() || !orderDetails.phone.trim() || !orderDetails.address.trim()) {
      alert("Please fill in all required fields.")
      return
    }

    if (orderItems.length === 0) {
      alert("Please add at least one product to your order.")
      return
    }

    setIsSubmitting(true)

    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${whatsappMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form and close modal
    setTimeout(() => {
      setOrderDetails({ name: "", phone: "", address: "", paymentMode: "cod" })
      setOrderItems([])
      setIsOpen(false)
      setIsSubmitting(false)
      if (onOrderComplete) {
        onOrderComplete()
      }
    }, 1000)
  }

  const isFormValid = orderDetails.name.trim() && orderDetails.phone.trim() && orderDetails.address.trim()
  const availableProducts = products.filter((p) => p.available)

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Complete Your Order</DialogTitle>
          <DialogDescription>Fill in your details and review your order before sending via WhatsApp.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Customer Details Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={orderDetails.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={orderDetails.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                Delivery Address *
              </Label>
              <Textarea
                id="address"
                placeholder="Enter your complete delivery address with pincode"
                value={orderDetails.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="min-h-[80px]"
              />
            </div>
          </div>

          {/* Payment Mode Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Mode</h3>
            <RadioGroup
              value={orderDetails.paymentMode}
              onValueChange={(value) => handleInputChange("paymentMode", value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-white bg-white">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex-1 cursor-pointer">
                  <div className="font-medium">Cash on Delivery</div>
                  <div className="text-sm text-gray-500">Pay when you receive</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-white bg-white">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">
                  <div className="font-medium">UPI Payment</div>
                  <div className="text-sm text-gray-500">Pay online via UPI</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Order Items Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Order</h3>
            {orderItems.length === 0 ? (
              <div className="text-center py-4 text-gray-500">No items in your order</div>
            ) : (
              <div className="space-y-3">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-white p-3 rounded-lg">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-red-500 hover:text-red-700"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add More Products */}
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-medium text-gray-800 mb-3">Add More Products</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableProducts.map((availableProduct) => (
                  <div key={availableProduct.id} className="flex items-center gap-3 bg-white p-3 rounded-lg border">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={availableProduct.image || "/placeholder.svg"}
                        alt={availableProduct.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{availableProduct.name}</h5>
                      <p className="text-xs text-gray-600">₹{availableProduct.price}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addProduct(availableProduct)}
                      className="text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="mt-4 pt-4 border-t bg-primary/5 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">₹{getTotalAmount()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmitOrder}
            disabled={!isFormValid || isSubmitting || orderItems.length === 0}
            className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            {isSubmitting ? "Processing..." : "Send Order via WhatsApp"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
