"use client"
import React from "react"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/typescript.svg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/javascript.svg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/react.svg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/typescript.svg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/javascript.svg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/typescript.svg",
  },
]

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  )
}
