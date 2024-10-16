"use client"

import acmeLogo from "@/assets/logo-acme.png"
// import apexLogo from "@/assets/logo-apex.png"
// import echoLogo from "@/assets/logo-echo.png"
// import pulseLogo from "@/assets/logo-pulse.png"
// import quantumLogo from "@/assets/logo-quantum.png"
// import celestialLogo from "@/assets/logo-celestial.png"

import { motion } from "framer-motion"
import Image from "next/image"

export const LogoTicker = () => {
  const logos = [
    "/javascript.svg",
    "/typescript.svg",
    "/tailwind.jpeg",
    "/react.svg",
    "/nextjs.webp",
    "/node-js.svg",
    "/express-js.png",
  ]

  return (
    <section className="py-2 md:py-6">
      <div className="container">
        <div className="flex items-center gap-8">
          <div className="flex-1 md:flex-none">
            <h2 className="font-semibold text-white/60">
              Trusted by top innovative teams
            </h2>
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
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <Image
                  key={index} // Add key prop here
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-16 w-auto px-0 md:px-6 lg:px-8"
                  height={100}
                  width={100}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
