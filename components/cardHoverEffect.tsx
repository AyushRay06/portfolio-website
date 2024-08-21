"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center text-4xl  font-extrabold text-zinc-300 ">
        PROJECTS
      </div>
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
    title: "FRIDAY",
    description:
      "A versatile AI-powered platform designed to generate images, videos, code, and music while providing real-time chat assistance. Built with cutting-edge technologies like Next.js, Tailwind CSS, Prisma, and OpenAI API, this site offers seamless user experiences, robust authentication with Clerk, and advanced media generation with Replicate AI. Powered by TypeScript and ZOD for enhanced reliability and type safety",
    link: "https://friday-tau.vercel.app/",
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
