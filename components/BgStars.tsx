"use client"
import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Skillzz } from "./skillzz"

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative ">
      <div>
        <Skillzz />
      </div>
      <BackgroundBeams />
    </div>
  )
}
