"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { X } from "lucide-react"

const AddToHomeScreenPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsVisible(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // Check if already installed or running in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches || (navigator as any).standalone) {
      setIsVisible(false) // Already installed
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const handleInstallClick = () => {
    if (deferredPrompt) {
      ;(deferredPrompt as any).prompt()
      ;(deferredPrompt as any).userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt")
        } else {
          console.log("User dismissed the A2HS prompt")
        }
        setDeferredPrompt(null)
        setIsVisible(false)
      })
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible || !deferredPrompt) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full bg-primary text-primary-foreground p-4 flex items-center justify-between shadow-lg z-50 md:hidden",
        "transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/vitabowl-logo.png"
          alt="Vitabowl Logo"
          width={48}
          height={48}
          className="rounded-lg bg-white p-1"
        />
        <div>
          <p className="font-semibold text-lg">Vitabowl</p>
          <p className="text-sm">Add to home screen for 1-click reordering!</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" onClick={handleInstallClick}>
          Install
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="text-primary-foreground hover:bg-primary/80"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}

export default AddToHomeScreenPrompt
