"use client"
import RetroGrid from "@/components/magicui/retro-grid"
import Image from "next/image"
import BlurFadeText from "./magicui/blur-fade-text"
export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hi, I'm Ayush
      </span> */}
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              //delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-centerleading-none  text-transparent"
              yOffset={8}
              text={`Hi, I'm Ayush `}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              //delay={BLUR_FADE_DELAY}
              text="Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter."
            />
          </div>
          <div className="pt-0">
            <Image
              className=" rounded-full"
              src="/ayush.jpeg"
              alt="ayush"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      <RetroGrid />
    </div>
  )
}
