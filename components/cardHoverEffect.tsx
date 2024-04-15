"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="text-center text-4xl text-zinc-300 ">PROJECTS</div>
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: "Medium",
    description: `
        A Bloging website.
        Tech stack:
        FRONTEND:TailWind, React
        BACKEND: Nodejs, Hono, ZOD, JWT
        DATABASE: Postgresql, Prisma(ORM), Prisma Accelerate.
        DEPLOYMENT: Cloudflare Workers`,
    link: "https://github.com/AyushRay06/Blog-web",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
]
