import OrbitingCircles from "@/components/ui/orbiting-circles"
import Image from "next/image"

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[400px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background shadow-xl dark:shadow-[#0f0f2a] border border-white/10">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black ">
        DevOps
      </span>

      {/* Inner Circles */}

      <OrbitingCircles
        className="size-[45px] border-none bg-transparent dark:bg-white"
        duration={20}
        delay={20}
        radius={180}
      >
        <Icons.aws />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={140}
      >
        <Icons.terraform />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={30}
        delay={10}
        radius={100}
      >
        <Icons.ansible />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={180}
      >
        <Icons.docker />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={60}
      >
        <Icons.jenkins />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent "
        radius={140}
        duration={20}
        reverse
      >
        <Icons.kubernaties />
      </OrbitingCircles>
    </div>
  )
}

const Icons = {
  docker: () => <Image src="/docker.svg" alt="docker" width={50} height={50} />,
  kubernaties: () => (
    <Image
      src="/kubernaties.png"
      alt="docker"
      width={40}
      height={40}
      className="rounded-full"
    />
  ),
  aws: () => (
    <Image
      src="/amazon-aws.svg"
      alt="docker"
      width={40}
      height={40}
      className="rounded-full"
    />
  ),
  ansible: () => (
    <Image
      src="/ansible.svg"
      alt="docker"
      width={30}
      height={30}
      className="rounded-full"
    />
  ),
  jenkins: () => (
    <Image
      src="/jenkins.png"
      alt="docker"
      width={40}
      height={40}
      className="rounded-full"
    />
  ),
  terraform: () => (
    <Image
      src="/terraform.png"
      alt="docker"
      width={50}
      height={50}
      className="rounded-full"
    />
  ),
}
