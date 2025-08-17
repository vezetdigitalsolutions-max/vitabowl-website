"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState("English") // Default language

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    // In a real app, you'd load translations here
    alert(`Language set to: ${lang} (dummy translation)`)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Globe className="h-5 w-5" />
            <span className="hidden sm:inline">{language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleLanguageChange("English")}>English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("Hindi")}>Hindi (dummy)</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("Tamil")}>Tamil (dummy)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
