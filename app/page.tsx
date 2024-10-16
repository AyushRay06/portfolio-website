import { FloatingDockDemo } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import React from "react"
import BlurFade from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"
import { Footer } from "@/components/footer"
import { ExperienceCard } from "@/components/hackathon-card"
import { ResumeCard } from "@/components/resume-card"
import { RetroGridDemo } from "@/components/retro-hero"
import { WorkTimeline } from "@/components/freelance-vol"
import { Skills } from "@/components/skills01"
import { LogoTicker } from "@/components/xFlowSkills"

export default function page() {
  return (
    <div className="min-h-screen mx-4 ">
      <div>
        <div className="w-screen">
          <div className="sm:mt-4 md:mt-16 ">
            <FloatingDockDemo />
          </div>
          <div className=" pt-32 mb-10 mx-8">
            <RetroGridDemo />
          </div>
          <div className="my-20">
            <LogoTicker />
            <LogoTicker />

            <LogoTicker />

            <LogoTicker />
          </div>

          <div className="space-y-12 w-full py-12 max-w-6xl mx-auto">
            <BlurFade>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mx-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my Projects
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed xl:text-2xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className=" max-w-5xl mx-auto">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mx-8">
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
          {/* work experient descriptin */}
          <div className="space-y-12 max-w-6xl mx-auto ml-50 py-12">
            <BlurFade>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mx-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    My Work Experience
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                    Since discovering programming, I &apos; ve focused on
                    solving problems through software. I &apos; ve contributed
                    to open-source, gained internship experience,and led a
                    coding club, mentored communities, and given talks on tech
                    tools.
                  </p>
                </div>
              </div>
            </BlurFade>
            {/* work experience data */}
            <BlurFade>
              <ul className="mb-4 ml-12 mx-8 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade key={project.title + project.dates}>
                    <ExperienceCard
                      title={project.title}
                      description={project.description}
                      role={project.role}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
          {/* work2 */}
          <div className="space-y-0 max-w-6xl mx-auto ml-50 pt-20">
            {/* Talks voluntree, freelace work descriprion */}
            <BlurFade>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mx-8">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Some more Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Tech Events & Community Impact
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                    Organizing hackathons, delivering technical talks, and
                    leading workshops to inspire and empower the tech community
                    while contributing through volunteer work and collaborative
                    initiatives.
                  </p>
                </div>
              </div>
            </BlurFade>
            {/* data Talks voluntree, freelace work descriprion */}
            <BlurFade>
              <WorkTimeline />
            </BlurFade>
          </div>
          {/* <SkillSection /> */}
          <section id="education">
            <div className=" max-w-6xl mx-auto  ">
              <div className="flex flex-col gap-y-10 min-h-0 mx-8">
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
