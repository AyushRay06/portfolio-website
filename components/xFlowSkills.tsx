"use client"

import acmeLogo from "@/assets/logo-acme.png"
// import apexLogo from "@/assets/logo-apex.png"
// import echoLogo from "@/assets/logo-echo.png"
// import pulseLogo from "@/assets/logo-pulse.png"
// import quantumLogo from "@/assets/logo-quantum.png"
// import celestialLogo from "@/assets/logo-celestial.png"

import { motion } from "framer-motion"
import Image from "next/image"
import { TextRevealCardPreview } from "./backendCard"
import { FrontendSkill } from "./frontend"

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
      name: "React",
      src: "/react.svg",
    },
    { name: "Next.js", src: "/nextjs.webp" },
    // { name: "Node-js", src: "/node-js.svg" },
    // { name: "Express-js", src: "/express-js.png" },
    // { name: "Prisma", src: "/prisma.avif" },
  ]

  return (
    <section className="py-2 md:py-6 max-w-7xl mx-auto">
      <div className="container">
        <div className="md:hidden">
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
                duration: 10,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="flex flex-none gap-4 pr-14 -translate-x-1/2"
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
    { name: "Next.js", src: "/nextjs.webp" },
    { name: "Node-js", src: "/node-js.svg" },
    { name: "Express-js", src: "/express-js.png" },
    { name: "Prisma", src: "/prisma.avif" },
  ]

  return (
    <section className="py-2 md:py-6 max-w-5xl mx-auto">
      <div className="container">
        <TextRevealCardPreview />
        <div className="flex items-center gap-8">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <>
                  <Image
                    key={index} // Add key prop here
                    src={logo.src}
                    alt={`Logo ${index + 1}`}
                    className="h-16 w-auto px-0 md:px-6 lg:px-8 rounded-full"
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
        </div>
      </div>
    </section>
  )
}
