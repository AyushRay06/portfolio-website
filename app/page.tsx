import { VortexDemoSecond } from "@/components/Flow"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"

import { WavyBackgroundDemo } from "@/components/hero"
import { FloatingDockDemo } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { Skills } from "@/components/skills"
import { Skillzz } from "@/components/skillzz"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import React from "react"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { DATA } from "@/data/resume"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { SparklesTextDemo } from "@/components/sparkel-text"
import { BlurInDemo } from "@/components/blur-in-text"
import { ExperienceCard } from "@/components/hackathon-card"
import { ResumeCard } from "@/components/resume-card"
import { RetroGridDemo } from "@/components/retro-hero"

export default function page() {
  return (
    <div className="min-h-screen mx-4 ">
      <div>
        <div className="w-screen">
          <div className="mt-10 ">
            <FloatingDockDemo />
          </div>
          <div className=" pt-32 mb-10 mx-8">
            <RetroGridDemo />
          </div>

          <div className="space-y-12 w-full py-12 max-w-4xl mx-auto">
            <BlurFade>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mx-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className=" max-w-[800px] mx-auto">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mx-8">
                {DATA.projects.map((project, id) => (
                  <BlurFade key={project.title}>
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto ml-50 py-12">
            <BlurFade>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mx-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. People from around the
                    country would come together and build incredible things in
                    2-3 days. It was eye-opening to see the endless
                    possibilities brought to life by a group of motivated and
                    passionate individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade>
              <ul className="mb-4 ml-12 mx-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade key={project.title + project.dates}>
                    <ExperienceCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
          <section id="education">
            <div className=" max-w-2xl mx-auto  ">
              <div className="flex flex-col gap-y-5 min-h-0 mx-8">
                <BlurFade>
                  <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                {DATA.education.map((education, id) => (
                  <BlurFade key={education.school}>
                    <ResumeCard
                      key={education.school}
                      href={education.href}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  )
}
