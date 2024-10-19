//import { CardSpotlight } from "@/components/ui/card-spotlight"

import { MoveLeft, MoveRight } from "lucide-react"

export function SkillsDescCard() {
  return (
    <div className="h-[400px] w-[400px] bg-white dark:bg-transparent shadow-xl dark:shadow-[#0f0f2a] border rounded-xl border-black/10 dark:border-white/10 p-6">
      <p className="text-xl font-bold relative z-20 mt-2 dark:text-white">
        Skills Overview
      </p>
      <div className="font-semibold dark:text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2">
          <Step title="Experienced in building modern, minimalist, and animated websites" />
          <Step title="Experience in a variety of back-ends. " />
          <Step title="Good overall knowledge of DevOPs." />
          <Step title="Knowledge of AWS and Google Cloud" />
          <Step title="Led and organized events as Google DSC Lead." />
          <Step title="Good communication skills, conveying technical concepts clearly" />
        </ul>
      </div>
      <p className="bg-gradient-to-r from-emerald-600 to-purple-500 rounded-md flex p-1 font-semibold text-black/80 dark:text-white  mt-2 text-sm">
        <MoveLeft className="font-bold text-black dark:text-white text-right mr-2" />
        Tools I have experience with in DevOps.
      </p>
      <p className=" bg-gradient-to-r from-emerald-600 to-purple-500 rounded-md  p-1 flex font-semibold text-black/80 dark:text-white mt-2 text-sm">
        Other Important Language and Tools I know.
        <MoveRight className="font-bold text-black dark:text-white text-right ml-2" />
      </p>
    </div>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-black/70 dark:text-white/70">{title}</p>
    </li>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}
