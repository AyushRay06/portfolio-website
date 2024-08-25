"use client"
import React from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconBrandX,
  IconHome,
  IconPaperclip,
  IconTerminal2,
  IconWriting,
} from "@tabler/icons-react"
import { ModeToggle } from "./theme-toogle"

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: (
        <IconPaperclip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://silver-brigid-82.tiiny.site/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AyushRay06",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ayush-ray-06494324a/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Ayush_a_ray",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/oyee_ayush/",
    },

    {
      title: "Blog",
      icon: (
        <IconWriting className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://ayush06.hashnode.dev/",
    },
    {
      title: "Music",
      icon: (
        <IconBrandSpotify className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Vbkk0",
    },
  ]
  return (
    <div className="flex fixed  inset-x-0 max-w-2xl mx-auto z-50  items-center justify-end h-[4rem] pb-2 w-full">
      <FloatingDock
        mobileClassName="translate-y-[50%]" // only for demo, remove for production
        items={links}
      />
      <ModeToggle />
    </div>
  )
}
