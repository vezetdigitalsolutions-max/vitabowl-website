"use client"

import type React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCart } from "@/components/CartProvider"
import { XCircle } from "lucide-react"
import CompleteOrderForm from "./CompleteOrderForm"

type CartSummaryModalProps = {
  children: React.ReactNode
}

export default function CartSummaryModal({ children }: CartSummaryModalProps) {
  const { cartItems, removeFromCart, updateCartItemQuantity, cartTotalPrice, clearCart } = useCart()

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Your Cart</DialogTitle>
          <DialogDescription>Review your selected Vitabowl snacks.</DialogDescription>
        </DialogHeader>
        {cartItems.length === 0 ? (
          <div className="py-8 text-center text-gray-600">Your cart is empty. Start adding some delicious chips!</div>
        ) : (
          <>
            <div className="max-h-[400px] overflow-y-auto pr-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-center">Qty</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-[50px] text-center">Remove</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-center">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateCartItemQuantity(item.id, Number.parseInt(e.target.value))}
                          className="w-16 text-center border rounded-md px-2 py-1"
                        />
                      </TableCell>
                      <TableCell className="text-right">₹{item.price}</TableCell>
                      <TableCell className="text-right">₹{item.price * item.quantity}</TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <XCircle className="h-5 w-5" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end items-center pt-4 border-t mt-4">
              <span className="text-xl font-bold text-gray-800">Total: ₹{cartTotalPrice}</span>
            </div>
          </>
        )}
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-4">
          <Button variant="outline" onClick={clearCart} disabled={cartItems.length === 0}>
            Clear Cart
          </Button>
          <CompleteOrderForm cartItems={cartItems} onOrderComplete={clearCart}>
            <Button disabled={cartItems.length === 0} className="bg-[#25D366] hover:bg-[#1DA851] text-white">
              Checkout on WhatsApp
            </Button>
          </CompleteOrderForm>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
