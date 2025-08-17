// lib/whatsapp.ts
import { WHATSAPP_PHONE_NUMBER, type Product } from "./data"

const BASE_WA_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=`

export const getProductWhatsAppLink = (product: Product, quantity = 1) => {
  const message = encodeURIComponent(`Hi Vitabowl! I'd like to order ${quantity} x ${product.name}.`)
  return `${BASE_WA_URL}${message}`
}

export type CartItem = Product & { quantity: number }

export const getCartWhatsAppLink = (cartItems: CartItem[]) => {
  let message = "Hi Vitabowl! I'd like to order the following items:\n\n"
  cartItems.forEach((item) => {
    message += `${item.quantity} x ${item.name} (₹${item.price * item.quantity})\n`
  })
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  message += `\nTotal: ₹${total}`
  return `${BASE_WA_URL}${encodeURIComponent(message)}`
}

// Bundle link is kept for future use, but not used in current UI
export const getBundleWhatsAppLink = (selectedProducts: Product[]) => {
  let message = "Hi Vitabowl! I'd like the 3-pack bundle:\n\n"
  selectedProducts.forEach((product) => {
    message += `1 x ${product.name}\n`
  })
  message += "\nTotal: ₹399"
  return `${BASE_WA_URL}${encodeURIComponent(message)}`
}
