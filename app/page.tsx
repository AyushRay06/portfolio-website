import { AnimatedPinDemo } from "@/components/AnimatedCard"
import { AnimatedTooltipPreview } from "@/components/AnimatedToolTip"
import { BentoGridThirdDemo } from "@/components/BentoGrid"
import { BackgroundBeamsDemo } from "@/components/BgStars"
import { VortexDemoSecond } from "@/components/Flow"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import { TextRevealCardPreview } from "@/components/Hidecard"
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
          <GoogleGeminiEffectDemo />
          <HeroScrollDemo />
          <div className="mb-40">
            <BackgroundBeamsDemo />
          </div>

          <TextRevealCardPreview />
          <MacbookScrollDemo />
        </div>
      </div>
    </div>
  )
}
