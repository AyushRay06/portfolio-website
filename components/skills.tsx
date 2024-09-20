import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Database,
  FileJson,
  Laptop,
  Server,
  Workflow,
} from "lucide-react"
import {
  DiDocker,
  DiJavascript,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di"
import { FaAws, FaCloudflare, FaJava, FaNodeJs } from "react-icons/fa"
import { GiMongolia } from "react-icons/gi"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiDocker, SiKubernetes, SiMongodb, SiPostgresql } from "react-icons/si"

const skills = [
  { name: "JavaScript", icon: <DiJavascript className="h-8 w-8 mb-2" /> },
  { name: "TypeScript", icon: <FileJson className="h-8 w-8 mb-2" /> },
  { name: "Java", icon: <FaJava className="h-8 w-8 mb-2" /> },
  { name: "Python", icon: <DiPython className="h-8 w-8 mb-2" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="h-8 w-8 mb-2" /> },
  { name: "Shadcn", icon: <Workflow className="h-8 w-8 mb-2" /> },
  { name: "React", icon: <DiReact className="h-8 w-8 mb-2" /> },
  { name: "TypeScript", icon: <RiNextjsFill className="h-8 w-8 mb-2" /> },
  { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 mb-2" /> },
  { name: "Python", icon: <Laptop className="h-8 w-8 mb-2" /> },
  { name: "GraphQL", icon: <Database className="h-8 w-8 mb-2" /> },
  { name: "MySql", icon: <DiMysql className="h-8 w-8 mb-2" /> },
  { name: "Postgresh", icon: <SiPostgresql className="h-8 w-8 mb-2" /> },
  { name: "TypeScript", icon: <SiMongodb className="h-8 w-8 mb-2" /> },
  { name: "Node.js", icon: <SiDocker className="h-8 w-8 mb-2" /> },
  { name: "Python", icon: <SiKubernetes className="h-8 w-8 mb-2" /> },
  { name: "GraphQL", icon: <FaAws className="h-8 w-8 mb-2" /> },
  { name: "Cloudflare", icon: <FaCloudflare className="h-8 w-8 mb-2" /> },
  { name: "React", icon: <Code2 className="h-8 w-8 mb-2" /> },
  { name: "TypeScript", icon: <FileJson className="h-8 w-8 mb-2" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8 mb-2" /> },
  { name: "Python", icon: <Laptop className="h-8 w-8 mb-2" /> },
  { name: "GraphQL", icon: <Database className="h-8 w-8 mb-2" /> },
  { name: "Docker", icon: <Workflow className="h-8 w-8 mb-2" /> },
]

export default function SkillSection() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="overflow-hidden bg-muted/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-red-200 dark:hover:bg-slate-800"
            >
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1">
                  {skill.icon}
                </div>
                <h3 className="font-semibold mt-2">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
