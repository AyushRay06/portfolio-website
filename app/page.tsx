import { AnimatedPinDemo } from "@/components/AnimatedCard"
import { AnimatedTooltipPreview } from "@/components/AnimatedToolTip"
import { BackgroundBeamsDemo } from "@/components/BgStars"
import { VortexDemoSecond } from "@/components/Flow"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { MacbookScrollDemo } from "@/components/MackBook"
import { NavbarDemo } from "@/components/NavbarDemo"
import { TabsDemo } from "@/components/TabDemo"
import { CardHoverEffectDemo } from "@/components/cardHoverEffect"
import { GoogleGeminiEffectDemo } from "@/components/googlegem"
import { Skills } from "@/components/skills"
import { Skillzz } from "@/components/skillzz"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import React from "react"

export default function page() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="w-screen">
          <NavbarDemo />
          <GoogleGeminiEffectDemo />
          <HeroScrollDemo />
          <BackgroundBeamsDemo />
          <AnimatedPinDemo />
          <CardHoverEffectDemo />
          <MacbookScrollDemo />
        </div>
      </div>
    </div>
  )
}
