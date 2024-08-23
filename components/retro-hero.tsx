"use client"
import RetroGrid from "@/components/magicui/retro-grid"
import Image from "next/image"
import BlurFadeText from "./magicui/blur-fade-text"
import Markdown from "react-markdown"
import BlurFade from "./magicui/blur-fade"
export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] mx-auto  max-w-6xl flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hi, I'm Ayush
      </span> */}
      <div className="mx-auto w-full max-w-2xl space-y-8 p-4">
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
      <h2 className="text-xl font-bold sm:p-5">About</h2>
      <BlurFade>
        <Markdown className="prose  text-pretty font-sans text-sm  p-5  dark:prose-invert">
          At the end of 2022, I quit my job as a software engineer to go
          fulltime into building and scaling my own SaaS businesses. In the
          past, [I pursued a double degree in computer science and
          business](/#education), [interned at big tech companies in Silicon
          Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in
          over 21 hackathons for fun](/#hackathons). I also had the pleasure of
          being a part of the first ever in-person cohort of buildspace called
          [buildspace sf1](https://buildspace.so/sf1).
        </Markdown>
      </BlurFade>

      <RetroGrid />
    </div>
  )
}
