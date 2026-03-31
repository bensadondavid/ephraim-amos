import TefsFr from "@/components/sections/fr/TefsFr"
import SoireeFr from "@/components/sections/fr/SoireeFr"
import ResponseFr from "@/components/sections/fr/Reponse"
import Link from "next/link"
import Image from "next/image"

export default function FrenchHomePage() {

  return(
    <div className="w-screen h-fit bg-[url('/fond-ephraim.png')] bg-repeat-y bg-[length:100%_auto] pt-12">
      <TefsFr />
      <SoireeFr />
      <ResponseFr />
      <div className="flex flex-col items-center gap-2 pb-5">
        <Image src={'/logo-ephraim.png'} alt="logo" width={50} height={50} />
        <p className="font-primary text-text text-center">Réalisé avec amour par <Link className="italic underline" href="https://azmana.fr">Azmana</Link></p>
      </div>
    </div>
  )
}
