"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"
import Image from "next/image"

interface Item {
  name: string
  description: string
  src: string
}

let notifications = [
  {
    name: "Git",
    description: "Expert in git, everyday job.",
    src: "/git.svg",
  },
  {
    name: "Git-Hub",
    description: "Expert in git too, everyday job too.",
    src: "/github.png",
  },
  {
    name: "Linux",
    description: "My best friend, terminal, bash, shell.",
    src: "/linux.svg",
  },
  {
    name: "Python",
    description: "Have used in AIML project and writting automation.",
    src: "/python.svg",
  },
  {
    name: "TurboRepo",
    description: "Have used in some projects to manage big codebases",
    src: "/turbo-logo.png",
  },
  {
    name: "Java",
    description: "Have done programmig in Java.",
    src: "/java.svg",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, src }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px]  cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl">
          <Image src={src} alt="logo" width={40} height={40} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex w-[400px] md:w-full lg:w-[330px] h-[400px]  flex-col p-2 overflow-hidden rounded-lg border bg-background shadow-xl dark:shadow-[#0f0f2a]",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}
