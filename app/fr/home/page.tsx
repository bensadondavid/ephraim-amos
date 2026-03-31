import TefsFr from "@/components/sections/fr/TefsFr"
import SoireeFr from "@/components/sections/fr/SoireeFr"

export default function FrenchHomePage() {

  return(
    <div className="w-screen h-fit bg-[url('/fond-ephraim.png')] pt-12">
      <TefsFr />
      <SoireeFr />
    </div>
  )
}
