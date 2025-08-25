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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { products, WHATSAPP_PHONE_NUMBER } from "@/lib/data"
import type { Product } from "@/lib/data"
import type { CartItem } from "@/lib/whatsapp"
import { Plus, Minus, X, ShoppingCart, User, MapPin, CreditCard, Package, Tag, Check } from "lucide-react"
import Image from "next/image"

type CompleteOrderFormProps = {
  children: React.ReactNode
  product?: Product
  cartItems?: CartItem[]
  onOrderComplete?: () => void
}

type CustomerDetails = {
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  pincode: string
  paymentMode: "upi" | "cod"
  specialInstructions: string
}

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

type ValidationErrors = {
  name?: string
  phone?: string
  email?: string
  address?: string
  city?: string
  state?: string
  pincode?: string
}

type CouponState = {
  code: string
  isApplied: boolean
  isValid: boolean
  discount: number
  message: string
}

export default function CompleteOrderForm({ children, product, cartItems, onOrderComplete }: CompleteOrderFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMode: "cod",
    specialInstructions: "",
  })
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [coupon, setCoupon] = useState<CouponState>({
    code: "",
    isApplied: false,
    isValid: false,
    discount: 0,
    message: "",
  })

  // Initialize order items when modal opens
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      setCurrentStep(1)
      setValidationErrors({})
      setCoupon({
        code: "",
        isApplied: false,
        isValid: false,
        discount: 0,
        message: "",
      })
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

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }))
    // Clear validation error when user starts typing
    if (validationErrors[field as keyof ValidationErrors]) {
      setValidationErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleCouponChange = (value: string) => {
    setCoupon((prev) => ({
      ...prev,
      code: value.toUpperCase(),
      isApplied: false,
      isValid: false,
      discount: 0,
      message: "",
    }))
  }

  const applyCoupon = () => {
    const couponCode = coupon.code.trim()

    if (!couponCode) {
      setCoupon((prev) => ({
        ...prev,
        message: "Please enter a coupon code",
        isValid: false,
      }))
      return
    }

    if (couponCode === "NGP10") {
      setCoupon((prev) => ({
        ...prev,
        isApplied: true,
        isValid: true,
        discount: 10,
        message: "Coupon applied! 10% discount added",
      }))
    } else {
      setCoupon((prev) => ({
        ...prev,
        isApplied: false,
        isValid: false,
        discount: 0,
        message: "Invalid coupon code",
      }))
    }
  }

  const removeCoupon = () => {
    setCoupon({
      code: "",
      isApplied: false,
      isValid: false,
      discount: 0,
      message: "",
    })
  }

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {}

    // Name validation
    if (!customerDetails.name.trim()) {
      errors.name = "Full name is required"
    } else if (customerDetails.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    // Phone validation
    if (!customerDetails.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^(\+91|91)?[6-9]\d{9}$/.test(customerDetails.phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid Indian phone number"
    }

    // Email validation
    if (!customerDetails.email.trim()) {
      errors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email)) {
      errors.email = "Please enter a valid email address"
    }

    // Address validation
    if (!customerDetails.address.trim()) {
      errors.address = "Address is required"
    } else if (customerDetails.address.trim().length < 10) {
      errors.address = "Please enter a complete address"
    }

    // City validation
    if (!customerDetails.city.trim()) {
      errors.city = "City is required"
    } else if (customerDetails.city.trim().length < 2) {
      errors.city = "Please enter a valid city name"
    }

    // State validation
    if (!customerDetails.state.trim()) {
      errors.state = "State is required"
    } else if (customerDetails.state.trim().length < 2) {
      errors.state = "Please enter a valid state name"
    }

    // Pincode validation
    if (!customerDetails.pincode.trim()) {
      errors.pincode = "Pincode is required"
    } else if (!/^\d{6}$/.test(customerDetails.pincode.trim())) {
      errors.pincode = "Please enter a valid 6-digit pincode"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
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

  const getSubtotal = () => {
    return orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getDiscountAmount = () => {
    if (coupon.isApplied && coupon.isValid) {
      return Math.round((getSubtotal() * coupon.discount) / 100)
    }
    return 0
  }

  const getTotalAmount = () => {
    return getSubtotal() - getDiscountAmount()
  }

  const getTotalItems = () => {
    return orderItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  const generateWhatsAppMessage = () => {
    // Clean and simple message format
    let message = "CUSTOMER DETAILS:\n"
    message += `Name: ${customerDetails.name}\n`
    message += `Phone: ${customerDetails.phone}\n`
    message += `Email: ${customerDetails.email}\n`
    message += `Address: ${customerDetails.address}\n`
    message += `City: ${customerDetails.city}\n`
    message += `State: ${customerDetails.state}\n`
    message += `Pincode: ${customerDetails.pincode}\n`
    message += `Payment: ${customerDetails.paymentMode.toUpperCase()}\n`

    if (customerDetails.specialInstructions.trim()) {
      message += `Special Instructions: ${customerDetails.specialInstructions}\n`
    }

    message += "\nORDER DETAILS:\n"
    orderItems.forEach((item, index) => {
      message += `${index + 1}. ${item.quantity}x ${item.name}\n`
      message += `   Rs.${item.price} each = Rs.${item.price * item.quantity}\n`
    })

    const subtotal = getSubtotal()
    const discountAmount = getDiscountAmount()
    const total = getTotalAmount()

    message += `\nSUBTOTAL: Rs.${subtotal}\n`

    if (coupon.isApplied && coupon.isValid) {
      message += `DISCOUNT (${coupon.code} - ${coupon.discount}%): -Rs.${discountAmount}\n`
    }

    message += `TOTAL ITEMS: ${getTotalItems()}\n`
    message += `FINAL AMOUNT: Rs.${total}`

    return encodeURIComponent(message)
  }

  const handleSubmitOrder = () => {
    if (!validateForm()) {
      alert("Please fix the errors in the form before submitting.")
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
      setCustomerDetails({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMode: "cod",
        specialInstructions: "",
      })
      setOrderItems([])
      setCurrentStep(1)
      setValidationErrors({})
      setCoupon({
        code: "",
        isApplied: false,
        isValid: false,
        discount: 0,
        message: "",
      })
      setIsOpen(false)
      setIsSubmitting(false)
      if (onOrderComplete) {
        onOrderComplete()
      }
    }, 1000)
  }

  const isFormValid = () => {
    return (
      customerDetails.name.trim() &&
      customerDetails.phone.trim() &&
      customerDetails.email.trim() &&
      customerDetails.address.trim() &&
      customerDetails.city.trim() &&
      customerDetails.state.trim() &&
      customerDetails.pincode.trim() &&
      Object.keys(validationErrors).length === 0
    )
  }

  const availableProducts = products.filter((p) => p.available)

  const nextStep = () => {
    if (currentStep === 1) {
      if (!validateForm()) {
        return
      }
    }
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            Complete Your Order
          </DialogTitle>
          <DialogDescription>Fill in your complete details to place your order via WhatsApp.</DialogDescription>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mt-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && <div className={`w-12 h-1 mx-2 ${currentStep > step ? "bg-primary" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 text-xs text-gray-600 mt-2">
            <span className={currentStep >= 1 ? "text-primary font-medium" : ""}>Customer Info</span>
            <span className={currentStep >= 2 ? "text-primary font-medium" : ""}>Order Details</span>
            <span className={currentStep >= 3 ? "text-primary font-medium" : ""}>Review & Send</span>
          </div>
        </DialogHeader>

        <div className="p-6">
          {/* Step 1: Customer Details */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={customerDetails.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={validationErrors.name ? "border-red-500" : ""}
                    />
                    {validationErrors.name && <p className="text-sm text-red-500">{validationErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={validationErrors.phone ? "border-red-500" : ""}
                    />
                    {validationErrors.phone && <p className="text-sm text-red-500">{validationErrors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={customerDetails.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={validationErrors.email ? "border-red-500" : ""}
                  />
                  {validationErrors.email && <p className="text-sm text-red-500">{validationErrors.email}</p>}
                </div>

                <Separator />

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-medium text-gray-800">Delivery Address</h4>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Street Address *
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="House/Flat No, Street Name, Area"
                    value={customerDetails.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className={`min-h-[80px] ${validationErrors.address ? "border-red-500" : ""}`}
                  />
                  {validationErrors.address && <p className="text-sm text-red-500">{validationErrors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                      City *
                    </Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={customerDetails.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className={validationErrors.city ? "border-red-500" : ""}
                    />
                    {validationErrors.city && <p className="text-sm text-red-500">{validationErrors.city}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                      State *
                    </Label>
                    <Input
                      id="state"
                      placeholder="State"
                      value={customerDetails.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className={validationErrors.state ? "border-red-500" : ""}
                    />
                    {validationErrors.state && <p className="text-sm text-red-500">{validationErrors.state}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                      Pincode *
                    </Label>
                    <Input
                      id="pincode"
                      placeholder="123456"
                      value={customerDetails.pincode}
                      onChange={(e) => handleInputChange("pincode", e.target.value)}
                      className={validationErrors.pincode ? "border-red-500" : ""}
                    />
                    {validationErrors.pincode && <p className="text-sm text-red-500">{validationErrors.pincode}</p>}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-700 font-medium">
                    * All fields marked with asterisk are required to complete your order.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Order Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Your Order Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {orderItems.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No items in your order</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orderItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg bg-gray-50"
                        >
                          <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-800 truncate">{item.name}</h4>
                              <p className="text-sm text-gray-600">Rs.{item.price} per pack</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent flex-shrink-0"
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent flex-shrink-0"
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right flex items-center gap-2">
                              <p className="font-semibold">Rs.{item.price * item.quantity}</p>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-500 hover:text-red-700 flex-shrink-0"
                                onClick={() => removeItem(item.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Add More Products */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Add More Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableProducts.map((availableProduct) => (
                      <div
                        key={availableProduct.id}
                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50"
                      >
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
                          <p className="text-xs text-gray-600">Rs.{availableProduct.price}</p>
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
                </CardContent>
              </Card>

              {/* Coupon Code Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    Coupon Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!coupon.isApplied ? (
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Input
                          placeholder="Enter coupon code"
                          value={coupon.code}
                          onChange={(e) => handleCouponChange(e.target.value)}
                          className="uppercase"
                        />
                        {coupon.message && !coupon.isValid && (
                          <p className="text-sm text-red-500 mt-1">{coupon.message}</p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={!coupon.code.trim()}
                        className="bg-transparent"
                      >
                        Apply
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-800">Coupon Applied: {coupon.code}</p>
                          <p className="text-sm text-green-600">{coupon.discount}% discount on your order</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="text-green-700 hover:text-green-800"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={customerDetails.paymentMode}
                    onValueChange={(value) => handleInputChange("paymentMode", value)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="font-medium">Cash on Delivery (COD)</div>
                        <div className="text-sm text-gray-500">Pay when you receive your order</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        <div className="font-medium">UPI Payment</div>
                        <div className="text-sm text-gray-500">Pay online via UPI (GPay, PhonePe, etc.)</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Special Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Special Instructions (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Any special delivery instructions or notes..."
                    value={customerDetails.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    className="min-h-[80px]"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Customer Details Review */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Customer Details
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                      <p>
                        <strong>Name:</strong> {customerDetails.name}
                      </p>
                      <p>
                        <strong>Phone:</strong> {customerDetails.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {customerDetails.email}
                      </p>
                      <p>
                        <strong>Address:</strong> {customerDetails.address}, {customerDetails.city},{" "}
                        {customerDetails.state} - {customerDetails.pincode}
                      </p>
                      <p>
                        <strong>Payment:</strong> {customerDetails.paymentMode.toUpperCase()}
                      </p>
                      {customerDetails.specialInstructions && (
                        <p>
                          <strong>Special Instructions:</strong> {customerDetails.specialInstructions}
                        </p>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Order Items Review */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Order Items
                    </h4>
                    <div className="space-y-3">
                      {orderItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded overflow-hidden bg-white">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">
                                Rs.{item.price} × {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="font-semibold">Rs.{item.price * item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Order Total with Coupon */}
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Subtotal:</span>
                        <span className="font-semibold">Rs.{getSubtotal()}</span>
                      </div>

                      {coupon.isApplied && coupon.isValid && (
                        <div className="flex justify-between items-center text-green-600">
                          <span className="font-medium">
                            Discount ({coupon.code} - {coupon.discount}%):
                          </span>
                          <span className="font-semibold">-Rs.{getDiscountAmount()}</span>
                        </div>
                      )}

                      <Separator />

                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold">Total Items:</span>
                        <span className="font-bold">{getTotalItems()}</span>
                      </div>

                      <div className="flex justify-between items-center text-xl">
                        <span className="font-semibold">Final Amount:</span>
                        <span className="font-bold text-primary">Rs.{getTotalAmount()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
            <div className="order-2 sm:order-1">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep} className="w-full sm:w-auto bg-transparent">
                  Previous
                </Button>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              {currentStep < 3 ? (
                <Button onClick={nextStep} className="w-full sm:w-auto">
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmitOrder}
                  disabled={!isFormValid() || isSubmitting || orderItems.length === 0}
                  className="bg-[#25D366] hover:bg-[#1DA851] text-white w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Order via WhatsApp"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
