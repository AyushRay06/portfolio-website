"use client"
import React, { useState } from "react"
import github from "@/public/about.png"
import x from "@/public/x.png"
import linkedin from "@/public/linkedin.png"
import instagram from "@/public/insta.png"

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Github"
              href="https://github.com/AyushRay06"
              src={github}
            />
            <ProductItem
              title="Linkedin"
              href="https://tailwindmasterkit.com"
              src={linkedin}
            />
            <ProductItem title="X" href="https://gomoonbeam.com" src={x} />
            <ProductItem
              title="Instagram"
              href="https://userogue.com"
              src={instagram}
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Frontend</HoveredLink>
            <HoveredLink href="/individual">Backend</HoveredLink>
            <HoveredLink href="/team">Fullstack</HoveredLink>
            <HoveredLink href="/enterprise">DevOps</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
