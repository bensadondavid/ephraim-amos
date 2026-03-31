import TefsHb from "@/components/sections/hb/TefsHb"
import SoireeHb from "@/components/sections/hb/SoireeHb"
import ResponseHb from "@/components/sections/hb/ResponseHb"
import Image from "next/image"
import Link from "next/link"

export default function HebrewHomePage() {
  return (
    <div className="w-screen h-fit bg-[url('/fond-ephraim.png')] pt-12">
      <TefsHb />
      <SoireeHb />
      <ResponseHb />
      <div className="flex flex-col items-center gap-2 pb-5">
        <Image src={'/logo-ephraim.png'} alt="logo" width={50} height={50} />
        <Link className="italic underline" href="https://azmana.fr">Azmana</Link>
      </div>
    </div>
  )
}
