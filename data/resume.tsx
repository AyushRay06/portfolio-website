import { Icons } from "@/components/icons"
import {
  IconBrandGithub,
  IconBrandGoogleBigQuery,
  IconClubs,
  IconGlobe,
} from "@tabler/icons-react"
import { Github, Globe } from "lucide-react"

export const DATA = {
  projects: [
    {
      title: "FRIDAY",
      href: "https://friday-tau.vercel.app/",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Developed a SaaS application that generates images, music, videos, and code, and features a chatbot for answering queries. The application leverages the OpenAI API and Replicate AI for content generation, and includes integrated customer support.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Framer-Motion",
        "Open-AI",
        "Replicate-AI",
        "Clerk",
        "Crisp",
      ],
      links: [
        {
          type: "Website",
          href: "https://friday-tau.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/Dr-Doom",
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "/friday.png",
      video: "",
    },
    {
      title: "Real-Time White Board",
      href: "https://github.com/AyushRay06/real-time-white-board",
      dates: "August 2023 - Ongoing",
      active: true,
      description:
        "A real-time whiteboard application enabling teams to collaborate seamlessly on planning and organizing tasks. Integrated Liveblocks to facilitate instant updates and interactions, ensuring real-time collaboration. The platform allows multiple users to simultaneously create, edit, and manage content, making it ideal for brainstorming sessions, project management, and team coordination.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Convex",
        "Clerk",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Liveblocks",
      ],
      links: [
        {
          type: "Website",
          href: "https://real-time-white-board-6sy4.vercel.app/",
          icon: <Globe />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/real-time-white-board",
          icon: <Github />,
        },
      ],
      image: "/white-board.png",
      //video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Portfolio",
      href: "https://portfolio-website-nu-lyart.vercel.app/",
      dates: " May 2023 - Keep Updting",
      active: true,
      description:
        "Built a responsive portfolio using Next.js and TypeScript, with sleek animations from Framer Motion and dynamic UI components from Shadcn and Magic UI. Designed to showcase projects and skills with a modern, interactive interface.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Raect",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-website-nu-lyart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/portfolio-website",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/port.png",
      video: "",
    },
    {
      title: "Start-Up Landing Page",
      href: "https://ai-startup-cyan.vercel.app/",
      dates: "october 7 - October 11 2024",
      active: true,
      description:
        "A modern, minimalistic landing page designed for a startup, featuring creative animations and gestures for a smooth, engaging user experience. The design focuses on simplicity and clarity, offering an intuitive and visually appealing interface..",
      technologies: [
        "TailwindCSS",
        "Typescript",
        "React",
        "Framer-Motion",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-startup-cyan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/AI-Startup",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/aiseoP.png",
      video: "",
    },
  ],

  education: [
    {
      school: "Dibrugarh University Institute of Engineering and Technology",
      href: "https://dibru.ac.in/dibrugarh-university-institute-of-engineering-and-technology-duiet",
      degree: "Bachelor of technology in computer science (BTech-CSE)",
      logoUrl: "/duiet.png",
      start: "2022",
      end: "2026",
    },

    {
      school: "Vivekananda Kendra Vidyalaya",
      href: "https://dibrugarh.vkv.in/",
      degree: "High Secondary Education",
      logoUrl: "/vkv.jpeg",
      start: "",
      end: "",
    },
  ],
  hackathons: [
    // {
    //   title: "ayush.com",
    //   dates: "June 19-July 20, 2024",
    //   role: "Sofware Developer Inter",
    //   description:
    //     "will be adding soon",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",

    //   links: [],
    // },
    {
      title: "Metapoise",
      dates: "September 15-September 20, 2024",
      role: "Frotend Developer | Freelance work",
      description: `I developed a responsive website for Metapoise, showcasing the fest’s mission, vision, events, and registration features. It provides a seamless user experience with modern design and smooth performance across devices.Key Technologies: Next.js, Tailwind CSS, TypeScript, React, Shadcn, Framer Motion.`,
      image: "/metapoise.jpeg",
      links: [
        {
          title: "Metapoise",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://meta-poise.vercel.app/",
        },
        {
          title: "Source-code",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/AyushRay06/MetaPoise",
        },
      ],
    },
    {
      title: "Indian Institute of Technology Guwahati (IIT-Guwahati)",
      dates: "June 19-July 20, 2024",
      role: "Research Intern",
      description:
        "Developed an AI model using YOLO for underwater trash detection and image processing, leveraging tools like TensorFlow, OpenCV, and Keras. This project was aslo sponsored by Sony.",
      image: "/iit.png",
    },
    {
      title: "Google Developer Student Club",
      dates: "August 2023 - August 2024",
      role: "GDSC Lead",
      description:
        "As the GDSC Lead from, I founded the club, built a community of 200+ members, and organized 10+ tech events on cloud, AI/ML, and software development. I also hosted hackathons, collaborated with universities, and achieved Tier One Club status globally.",
      icon: "public",
      image: "/gdsc.png",
      links: [
        {
          title: "GDSC Dibrigarh University",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gdsc.community.dev/dibrugarh-university-dibrugarh-india/",
        },
      ],
    },
    {
      title: "Google Developer Student Club",
      dates: "September 2023 - November 2023",
      role: "Goggle Cloud Facilitator",
      description:
        "Guided over 150 students in mastering Google Cloud technology, including services like Compute Engine, Kubernetes, Cloud Storage, and BigQuery. Explained cloud concepts and platform-independent technologies, ensuring students achieved their milestones through a solid understanding of cloud fundamentals.",
      icon: "public",
      image: "/gdsc.png",
      links: [],
    },
    {
      title: "Girl Script Summer Of Code",
      dates: "May 2023 - July 2024",
      role: "Open-Source Contributer",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "/gssoc.jpg",
    },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   role: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    // },
  ],
}
