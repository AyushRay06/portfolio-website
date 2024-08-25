"use client"
import BlurFade from "@/components/magicui/blur-fade"
import Link from "next/link"
import { ConfettiFireworks } from "./confetti"

export const Footer = () => {
  return (
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 mt-10">
      <BlurFade>
        <div className="space-y-3">
          {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div> */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link
              href="https://x.com/Ayush_a_ray"
              className="text-blue-500 hover:underline"
            >
              with a direct question on twitter
            </Link>{" "}
            and I&apos;ll respond whenever I can. Thanks for visiting Give me a
          </p>
        </div>
        <div className="my-5">
          <ConfettiFireworks />
        </div>
      </BlurFade>
    </div>
  )
}
