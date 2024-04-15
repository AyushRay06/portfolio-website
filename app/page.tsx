import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { NavbarDemo } from "@/components/NavbarDemo"
import { TabsDemo } from "@/components/TabDemo"
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
          <TabsDemo />
          <CardHoverEffectDemo />
        </div>
      </div>
    </div>
  )
}
