"use client"

// import apexLogo from "@/assets/logo-apex.png"
// import echoLogo from "@/assets/logo-echo.png"
// import pulseLogo from "@/assets/logo-pulse.png"
// import quantumLogo from "@/assets/logo-quantum.png"
// import celestialLogo from "@/assets/logo-celestial.png"

import { motion } from "framer-motion"
import Image from "next/image"
import { BackendSkill, FrontendSkill } from "./frontend"

export const FrontEndTools = () => {
  const logos = [
    {
      name: "Javascript",
      src: "/javascript.svg",
    },
    {
      name: "Typescript",
      src: "/typescript.svg",
    },
    {
      name: "Tailwind",
      src: "/tailwind.jpeg",
    },
    {
      name: "Framer-Motion",
      src: "/fm.png",
    },
    {
      name: "React",
      src: "/react.svg",
    },
    { name: "Next.js", src: "/nextjs.webp" },
    {
      name: "Javascript",
      src: "/javascript.svg",
    },
    {
      name: "Typescript",
      src: "/typescript.svg",
    },
    {
      name: "Tailwind",
      src: "/tailwind.jpeg",
    },
    {
      name: "Framer-Motion",
      src: "/fm.png",
    },
    {
      name: "React",
      src: "/react.svg",
    },
    { name: "Next.js", src: "/nextjs.webp" },
    //Elements twice to loop smothly[repatetype]
  ]

  return (
    <section className="py-2 md:py-6 max-w-6xl mx-auto ">
      <div className="container md:border border-black/10 dark:border-white/10 rounded-2xl md:shadow-lg md:dark:shadow-[#0f0f2a]">
        <div className="md:hidden text-center">
          <FrontendSkill />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:block md:flex-none">
            <FrontendSkill />
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-none gap-4 pr-4 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <>
                  <Image
                    key={index} // Add key prop here
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    className="h-10 w-auto px-0 lg:px-4"
                    height={100}
                    width={100}
                  />
                  <p className="inline-flex items-center justify-start font-bold p-0 m-0">
                    {logo.name}
                  </p>
                </>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const BackEndTools = () => {
  const logos = [
    { name: "Node-js", src: "/node-js.svg" },
    { name: "Express-js", src: "/express-js.png" },
    { name: "Next.js", src: "/nextjs.webp" },
    { name: "JWT", src: "/jwt.png" },
    { name: "Clerk", src: "/clerk.png" },
    { name: "Postman", src: "/postman.svg" },
    { name: "Prisma", src: "/prisma.avif" },
    { name: "PostgreSQL", src: "/postgresql.svg" },
    { name: "MongoDB", src: "/mongodb.svg" },
    { name: "MySQL", src: "/mysql.png" },
    { name: "CloudFlare", src: "/cloudflare.svg" },
    { name: "Convex", src: "/convex.png" },
    { name: "Socket.io", src: "/soket.png" },
    { name: "Liveblocks", src: "/liveblocks.png" },

    { name: "Node-js", src: "/node-js.svg" },
    { name: "Express-js", src: "/express-js.png" },
    { name: "Next.js", src: "/nextjs.webp" },
    { name: "JWT", src: "/jwt.png" },
    { name: "Clerk", src: "/clerk.png" },
    { name: "Postman", src: "/postman.svg" },
    { name: "Prisma", src: "/prisma.avif" },
    { name: "PostgreSQL", src: "/postgresql.svg" },
    { name: "MongoDB", src: "/mongodb.svg" },
    { name: "MySQL", src: "/mysql.png" },
    { name: "CloudFlare", src: "/cloudflare.svg" },
    { name: "Convex", src: "/convex.png" },
    { name: "Socket.io", src: "/soket.png" },
    { name: "Liveblocks", src: "/liveblocks.png" },
  ]

  return (
    <section className="py-2 md:py-6 max-w-6xl mx-auto ">
      <div className="container md:border border-black/10 dark:border-white/10 rounded-2xl md:shadow-lg md:dark:shadow-[#0f0f2a]">
        <div className="md:hidden text-center">
          <BackendSkill />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-none gap-4 pr-4 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <>
                  <Image
                    key={index} // Add key prop here
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    className="h-10 w-auto px-0 lg:px-4"
                    height={100}
                    width={100}
                  />
                  <p className="inline-flex items-center font-bold">
                    {logo.name}
                  </p>
                </>
              ))}
            </motion.div>
          </div>
          <div className="hidden md:block md:flex-none text-end">
            <BackendSkill />
          </div>
        </div>
      </div>
    </section>
  )
}
