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
      title: "Debug",
      href: "https://socially-plum.vercel.app/",
      dates: "January 2025 - August 2024",
      active: true,
      description:
        "Built a social media platform for developers and tech enthusiasts to connect, share ideas, and interact. Developed with Next.js, React, TypeScript, and Tailwind CSS, and powered by Prisma and PostgreSQL for efficient data management and scalability.",
      technologies: [
        "Typescript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://socially-plum.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/Socially",
          icon: <IconBrandGithub className="size-3" />,
        },
      ],
      image: "/debug.png",
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
      title: "Exclitest",
      href: "https://portfolio-website-nu-lyart.vercel.app/",
      dates: "October 2023 - I Keep adding Features",
      active: true,
      description:
        "The **Automated Test Creation System** converts Excel files into interactive MCQs with ease. Teachers can upload files to create timed, randomized tests, each with a unique code or QR for quick student access. The **Teacher Dashboard** allows editing and performance tracking, while the **Student Dashboard** provides instant feedback and test history, all within a user-friendly, real-time interface.",
      technologies: [
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Raect",
        "Next.js",
        "Express",
        "MongoDB",
        "Clerk",
        "XLSX",
      ],
      links: [
        {
          type: "Website",
          href: "https://excelitest.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AyushRay06/goc-hack-final",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/excli.png",
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
  ],
  //-------------------Education-------------------------------------

  education: [
    {
      school: "Dibrugarh University Institute of Engineering and Technology",
      href: "https://dibru.ac.in/dibrugarh-university-institute-of-engineering-and-technology-duiet",
      degree: "Bachelor of technology in computer science (BTech-CSE)",
      logoUrl: "/duiet.png",
      start: "2022",
      end: "2026",
    },

    // {
    //   school: "Vivekananda Kendra Vidyalaya",
    //   href: "https://dibrugarh.vkv.in/",
    //   degree: "High Secondary Education",
    //   logoUrl: "/vkv.jpeg",
    //   start: "",
    //   end: "",
    // },
  ],
  // ------------------Experience-----------------------------
  hackathons: [
    {
      title: "Indian Institute of Technology Guwahati (IIT-Guwahati)",
      dates: "June 2024-July 2024",
      role: "Research Intern",
      description: [
        "Achieved 92% accuracy in underwater trash detection using YOLO and TensorFlow, reducing false positives by 30% and improving detection clarity by 45% in low-visibility conditions.",
        "Developed an interactive marine sustainability dashboard with React, Node.js, and MongoDB, enabling real-time insights and data analysis.",
      ],
      image: "/iit.png",
    },
    // -----------------------------------------
    {
      title: "Game og Codes Hackathon",
      dates: "October 29, 2024",
      role: "Won Hackathon.",
      description: [
        `Secured 1st prize by demonstrating advanced full-stack skills in JavaScript, and real-time performance analytics.`,
        `Reduced test creation time by 90% with an automated, one-click Excel-to-MCQ platform, supporting 500+ concurrent
    users and 250 simultaneous tests using React, Next.js, Express, and MongoDB.`,
      ],
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    },
    // -----------------------------------------
    {
      title: "Google Developer Student Club",
      dates: "August 2023 - August 2024",
      role: "GDSC Lead",
      description: [
        `Equippted students with industry-relevant skills in web development, AI/ML, and cloud computing, leading to
90% more project submissions and 50+ members securing internships or certifications.`,

        `Founded and led the GDSC chapter, growing a vibrant 500+ member community, Organized 20+ workshops, 10+
tech talks, hackathons. Achieving Tier 1 global recognition for impactful contributions to student learning.`,
      ],
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
    // ------------------------------------------------
    {
      title: "Metapoise",
      dates: "September 15-September 20, 2024",
      role: "Frotend Developer | Freelance work",
      description: [
        `Developed a dynamic platform to showcase events, coordinators, and sponsors, enabling real-time content updates.`,
        `Boosted user engagement by 40% by designing a responsive, interactive website with Next.js, React, Framer
        Motion, and Tailwind CSS, optimized for 5+ device types.`,
      ],
      image: "/MetaPoise.webp",
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
    // ---------------------------------------------
    {
      title: "Google Developer Student Club",
      dates: "September 2023 - November 2023",
      role: "Goggle Cloud Facilitator",
      description: [
        `Achieved Tier 1 global recognition by mentoring 1000+ students in scalable web app development and enabling 200+
        to earn Google Cloud Skill Badges, leveraging Kubernetes, Docker, and CI/CD.`,
        `Conducted 15+ workshops on React, Node.js, Express.js, MongoDB, and Google Cloud services like Compute
        Engine, Cloud Functions, and VPC`,
      ],
      icon: "public",
      image: "/gdsc.png",
      links: [],
    },
  ],
}
// -------------------------------------------------------------------------------------------
