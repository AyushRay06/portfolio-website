import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Props {
  title: string
  description: string[]
  dates: string
  role: string
  image?: string
  links?: readonly {
    icon: React.ReactNode
    title: string
    href: string
  }[]
}
export function ExperienceCard({
  title,
  description,
  dates,
  role,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-sm text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-medium text-normal md:text-xl lg:text-xxl leading-none">
          {title}
        </h2>
        {role && (
          <p className="text-normal md:text-xl lg:text-xl font-semibold">
            {role}
          </p>
        )}
        {description && Array.isArray(description) && (
          <ul className="list-disc ml-6 text-sm md:text-base text-muted-foreground">
            {description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  )
}
