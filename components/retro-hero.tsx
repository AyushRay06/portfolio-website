"use client"
import RetroGrid from "@/components/magicui/retro-grid"
import Image from "next/image"
import BlurFadeText from "./magicui/blur-fade-text"
import Markdown from "react-markdown"
import BlurFade from "./magicui/blur-fade"
export function RetroGridDemo() {
  return (
    <div className="relative flex h-[700px] mx-auto  max-w-6xl flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hi, I'm Ayush
      </span> */}
      <div className="mx-auto w-full max-w-3xl space-y-8 p-4 ">
        <div className="gap-2 flex justify-between max-w-[700px]">
          <div className="flex-col flex flex-1 space-y-1.5 max-w-[500px]">
            <BlurFadeText
              //delay={BLUR_FADE_DELAY}
              className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-7xl xl:text-7xl/none pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-centerleading-none  text-transparent"
              yOffset={8}
              text={`Hi, I'm Ayush `}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-2xl"
              //delay={BLUR_FADE_DELAY}
              text="Explore my work and feel free to connect if you have ideas or opportunities. Active on Twitter."
            />
          </div>
          <div className="pt-0">
            <Image
              className=" rounded-full"
              src="/ayush.jpeg"
              alt="ayush"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold sm:p-5">About</h2>
      <BlurFade>
        <Markdown className="prose  text-pretty font-sans text-sm md:text-lg  py-5 px-5 md:px-16  dark:prose-invert">
          I&apos;m a Software Engineer specializing in Full Stack Development
          and AI agents, with a strong focus on building and deploying scalable,
          high-performance applications. Skilled in modern web technologies,
          I&apos;ve delivered impactful solutions through seamless integrations
          and optimized Vercel deployments. As a former Google Developer Student
          Club Lead, I guided a community of 500+ developers, organizing 20+
          events to drive innovation. With experience in internships, freelance
          projects, and open-source contributions, I&apos;m passionate about
          crafting efficient, user-focused applications that solve real-world
          problems.
        </Markdown>
      </BlurFade>

      <RetroGrid />
    </div>
  )
}
