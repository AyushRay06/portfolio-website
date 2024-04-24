"use client"

import Image from "next/image"
import React from "react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3  py-10 mx-20">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Git GitHub & OpenSource
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Accelerating Growth: Unleashing the Power of Open Source in 2023
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/github-blog.avif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://ayush06.hashnode.dev/accelerating-growth-unleashing-the-power-of-open-source-in-2023"
              target="__blank"
              className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
            >
              Read Blog →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Containers: Docker
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Learn Docker The Easy Way.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/Docker-blog.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://ayush06.hashnode.dev/learn-docker-the-easy-way"
              target="__blank"
              className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
            >
              Read Blog →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Terraform: IaaC
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Mastering Terraform: Elevate Your Infrastructure with Remote State
            Management
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/terraform-blog.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://ayush06.hashnode.dev/mastering-terraform-elevate-your-infrastructure-with-remote-state-management"
              target="__blank"
              className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
            >
              Read Blog →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  )
}
