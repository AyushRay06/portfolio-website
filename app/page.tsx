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
import CardDemo1 from "@/components/blocks/cards-demo-1"
import CardDemo2 from "@/components/blocks/cards-demo-2"
import CardDemo3 from "@/components/blocks/cards-demo-3"
import { CardHoverEffectDemo } from "@/components/cardHoverEffect"
import { WavyBackgroundDemo } from "@/components/hero"
import { FloatingDockDemo } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { Skills } from "@/components/skills"
import { Skillzz } from "@/components/skillzz"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import React from "react"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { DATA } from "@/data/resume"

export default function page() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="w-screen">
          <FloatingDockDemo />
          <WavyBackgroundDemo />
          <div className="flex flex-row ">
            <CardHoverEffectDemo />
          </div>

          <HeroScrollDemo />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                //delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
