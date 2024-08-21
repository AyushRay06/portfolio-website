"use client"
import React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
const font = Poppins({ subsets: ["latin"], weight: "400" })

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      {/* <div className="flex h-full items-center justify-center pb-0 relative z-[-10]">
        <Image src="/ayush.png" alt="ayush" width={300} height={300} />
      </div> */}
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p
        className={cn(
          "text-base md:text-lg mt-4 text-white font-normal inter-var text-center",
          font.className
        )}
      >
        Welcome to my digital playground! I'm Ayush Ray, a passionate developer
        who thrives on the thrill of bringing ideas to life through code.
        Whether it's building cutting-edge software, deploying scalable
        solutions, or exploring new technologies, I'm always on the hunt for the
        next challenge. My approach to development is much like Tony Stark's
        approach to engineering—relentless innovation, a drive to push
        boundaries, and a bit of flair. Let's build the future, one line of code
        at a time.
      </p>
    </WavyBackground>
  )
}
