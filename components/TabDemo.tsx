"use client"

import Image from "next/image"
import { Tabs } from "@/components/ui/tabs"
import x from "@/public/x.png"

export function TabsDemo() {
  const tabs = [
    {
      title: "Framework & Libary",
      value: "Framework & Libary",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-600 to-zinc-800">
          <p>Framework & Libary</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Tolls",
      value: "Tolls",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-900">
          <p>Tolls</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Language",
      value: "Language",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-violet-900">
          <p>Language tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-700 to-rose-800">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-yellow-100">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ]

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = () => {
  return (
    <Image
      src={x}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}
