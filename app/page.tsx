import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { NavbarDemo } from "@/components/NavbarDemo"
import { CardHoverEffectDemo } from "@/components/cardHoverEffect"
import { GoogleGeminiEffectDemo } from "@/components/googlegem"
import React from "react"

export default function page() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="w-screen">
          <NavbarDemo />
          <GoogleGeminiEffectDemo />
          <HeroScrollDemo />
          <CardHoverEffectDemo />
        </div>
      </div>
    </div>
  )
}
