import SoireeSvg from "@/app/svg/soireeSvg"
import Image from "next/image"
import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"

export default function SoireeFr() {

  return(
    
    <div className="w-full h-fit rounded-t-[50%_180px] rounded-b-[50%_180px] bg-[#E3D7C6] flex flex-col justify-center items-center gap-6 pb-16 text-center text-xs text-text font-primary">
      <div className="flex flex-col justify-center items-center translate-y-8">
        <SoireeSvg />
        <Image src={"/logo-ephraim.png"} alt="logo" width={50} height={50} className="-translate-y-12" />
      </div>
      <p className="w-[90%]">Mr & Mme Méir et Esthy Amos</p>
      <p className="text-text font-name text-[60px]">Ephraim Shimon</p>
      <p className="w-[90%]">Un moment de joie et de partage, pour célébrer ensemble cette belle étape <br />qui aura lieu b´h le</p>
      <p className="text-lg font-bold">Lundi 27 avril 2026 <br />À 19:15</p>
      <p className="text-lg font-bold">À la grande synagogue de Jérusalem<br />King George St 56 <br />Jérusalem</p>
      <div className="flex flex-col gap-3 pt-3">
        <Waze name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" lat="31.776232" long="35.216980" text="Itinéraire Waze" />
        <SaveTheDate name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" date={[2026, 4, 27, 19, 15]} text="Ajouter au calendrier" />
      </div>
    </div>

  )

}
