"use client"

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react"
// Removed: import { getLocalStorageItem, setLocalStorageItem } from "@/lib/localStorage"
import type { Product } from "@/lib/data"
import type { CartItem } from "@/lib/whatsapp"

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartItemQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartTotalItems: number
  cartTotalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  // Removed: const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Cart will now always start empty, as localStorage is removed
    setCartItems([])
    // Removed: if (!isLoaded) {
    // Removed:   const storedCart = getLocalStorageItem<CartItem[]>("vitabowl_cart", [])
    // Removed:   setCartItems(storedCart)
    // Removed:   setIsLoaded(true)
    // Removed: }
  }, []) // Removed: [isLoaded]

  // Removed: useEffect(() => {
  // Removed:   // Save cart to localStorage whenever it changes, but only after initial load
  // Removed:   if (isLoaded) {
  // Removed:     setLocalStorageItem("vitabowl_cart", cartItems)
  // Removed:   }
  // Removed: }, [cartItems, isLoaded])

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        return [...prevItems, { ...product, quantity }]
      }
    })
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }, [])

  const updateCartItemQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId)
      }
      return prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
    })
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const cartTotalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    cartTotalItems,
    cartTotalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
