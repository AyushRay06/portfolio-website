import Image from "next/image"
import React from "react"
import { Timeline } from "./ui/timeline"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Button } from "./ui/button"

export function WorkTimeline() {
  const data = [
    {
      title: "Hackathon Organizer",
      content: (
        <div>
          <span className="prose dark:prose-invert text-sm md:text-base text-muted-foreground">
            Organized a successful hackathon with 100+ participants, focusing on
            trending problem statements such as AI-powered chatbots, real-time
            collaboration tools, blockchain-based voting systems, and
            sustainability-focused tech solutions. The event fostered innovation
            and teamwork, providing participants with hands-on experience in
            solving real-world challenges.
          </span>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="/work2/hack2.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/work2/hack.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Technical Talks",
      content: (
        <div>
          <span className="prose dark:prose-invert text-sm md:text-base text-muted-foreground">
            Delivered 10+ technical talks at GDSC events and college tech fests,
            educating 1000+ students on topics like Git, GitHub, open source,
            Docker, and software development. Simplified complex concepts,
            fostering participation in open-source contributions and adoption of
            industry-standard software development practices.
          </span>
          <div className="mb-8"></div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/work2/workshop.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/work2/workshop2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Opensource Contributer",
      content: (
        <div>
          {/* <Link href="https://github.com/AyushRay06">
            <Button className="mb-2">
              Github
              <GitHubLogoIcon className="h-6 w-6 ml-2" />
            </Button>
          </Link> */}
          <div className="prose dark:prose-invert text-sm md:text-base text-muted-foreground">
            I actively contribute to open source, focusing on improving projects
            by fixing bugs, adding features, and optimizing performance.
            Collaborating with the community has helped me grow my skills in
            technologies like JavaScript, TypeScript, and React. Contributing
            allows me to give back and support the growth of open-source
            software.
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/work2/git.png"
              alt="github"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/os2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
