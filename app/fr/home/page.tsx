import TefsFr from "@/components/sections/fr/TefsFr"
import SoireeFr from "@/components/sections/fr/SoireeFr"
import ResponseFr from "@/components/sections/fr/Reponse"

export default function FrenchHomePage() {

  return(
    <div className="w-screen h-fit bg-[url('/fond-ephraim.png')] pt-12">
      <TefsFr />
      <SoireeFr />
      <ResponseFr />
    </div>
  )
}
