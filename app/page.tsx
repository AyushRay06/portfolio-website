import { AnimatedTooltipPreview } from "@/components/AnimatedToolTip"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { NavbarDemo } from "@/components/NavbarDemo"
import { TabsDemo } from "@/components/TabDemo"
import { CardHoverEffectDemo } from "@/components/cardHoverEffect"
import { GoogleGeminiEffectDemo } from "@/components/googlegem"
import { Skills } from "@/components/skills"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import React from "react"

export default function page() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="w-screen">
          <NavbarDemo />
          <GoogleGeminiEffectDemo />
          <HeroScrollDemo />
          <Skills />
          <TabsDemo />
          <CardHoverEffectDemo />
          <AnimatedTooltipPreview />
        </div>
      </div>
    </div>
  )
}
