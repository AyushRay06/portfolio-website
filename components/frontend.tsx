"use client"
import React from "react"
import { motion } from "framer-motion"
import { LinkPreview } from "@/components/ui/link-preview"

export function FrontendSkill() {
  return (
    <div className="flex justify-center items-center h-[8rem]  px-4 max-w-[400px] mx-auto  ">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl  ">
        Front-end developer building{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Morden UIs
        </LinkPreview>{" "}
        for impactful{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          projects.
        </LinkPreview>{" "}
      </p>
    </div>
  )
}
export function backendSkill() {
  return (
    <div className="flex justify-center items-center h-[8rem]  px-4 max-w-[400px] mx-auto  ">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl ">
        Front-end developer building{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Morden UIs
        </LinkPreview>{" "}
        for impactful{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          projects.
        </LinkPreview>{" "}
      </p>
    </div>
  )
}
