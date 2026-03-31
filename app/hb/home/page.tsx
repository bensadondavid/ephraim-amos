import TefsHb from "@/components/sections/hb/TefsHb"
import SoireeHb from "@/components/sections/hb/SoireeHb"
import ResponseHb from "@/components/sections/hb/ResponseHb"

export default function HebrewHomePage() {
  return (
    <div className="w-screen h-fit bg-[url('/fond-ephraim.png')] pt-12">
      <TefsHb />
      <SoireeHb />
      <ResponseHb />
    </div>
  )
}
