"use client"
import React from "react"
import { motion } from "framer-motion"
import { LinkPreview } from "@/components/ui/link-preview"

export function FrontendSkill() {
  return (
    <div className="flex justify-center items-center h-[8rem]  px-4 max-w-[400px] mx-auto  ">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl  ">
        <span className="font-bold text-3xl bg-gradient-to-r from-red-500 via-violet-500 to-indigo-400 text-transparent bg-clip-text">
          Frontend
        </span>{" "}
        developer building{" "}
        <LinkPreview url="https://meta-poise.vercel.app/" className="font-bold">
          Morden UIs
        </LinkPreview>{" "}
        and impactful{" "}
        <LinkPreview
          url="https://ai-startup-cyan.vercel.app/"
          className="font-bold"
        >
          projects.
        </LinkPreview>{" "}
      </p>
    </div>
  )
}
export function BackendSkill() {
  return (
    <div className="flex justify-center items-center h-[8rem]  px-4 max-w-[420px] mx-auto  ">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl ">
        <span className="font-bold text-3xl bg-gradient-to-r from-emerald-600 via-green-500 to-yellow-400 text-transparent bg-clip-text">
          Backend
        </span>{" "}
        developer carfting robust{" "}
        <LinkPreview
          url="https://real-time-white-board-6sy4.vercel.app/"
          className="font-bold"
        >
          Projects
        </LinkPreview>{" "}
        with Versatile{" "}
        <LinkPreview url="https://friday-tau.vercel.app/" className="font-bold">
          solutions.
        </LinkPreview>{" "}
      </p>
    </div>
  )
}
