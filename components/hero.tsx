"use client"
import React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import BlurFadeText from "./magicui/blur-fade-text"
import BlurFade from "./magicui/blur-fade"
import Markdown from "react-markdown"

const font = Poppins({ subsets: ["latin"], weight: "400" })

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      {/* <div className="flex h-full items-center justify-center pb-0 relative z-[-10]">
        <Image src="/ayush.png" alt="ayush" width={300} height={300} />
      </div> */}

      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              //delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none"
              yOffset={8}
              text={`Hi, I'm Ayush 👋`}
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

      <h2 className="text-xl font-bold sm:p-5">About</h2>

      <Markdown className="prose  text-pretty font-sans text-normal  sm:p-5  dark:prose-invert">
        At the end of 2022, I quit my job as a software engineer to go fulltime
        into building and scaling my own SaaS businesses. In the past, [I
        pursued a double degree in computer science and business](/#education),
        [interned at big tech companies in Silicon
        Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in
        over 21 hackathons for fun](/#hackathons). I also had the pleasure of
        being a part of the first ever in-person cohort of buildspace called
        [buildspace sf1](https://buildspace.so/sf1).
      </Markdown>
    </WavyBackground>
  )
}
