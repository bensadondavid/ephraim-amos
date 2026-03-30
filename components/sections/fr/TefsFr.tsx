/* eslint-disable react/no-unescaped-entities */
import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"
import Image from "next/image"
import TefsSvg from "@/app/svg/tefsSvg"

export default function TefsFr() {

  return(
    <div className="w-full h-fit rounded-t-[50%_180px] bg-[url('/fond-ephraim.png')] flex flex-col justify-center items-center gap-6 pb-16 text-center text-xs text-text font-primary shadow-[0_-10px_20px_rgba(0,0,0,0.40)]">
      <div className="flex flex-col justify-center items-center translate-y-8">
        <TefsSvg />
        <Image src={"/logo-ephraim.png"} alt="logo" width={50} height={50} className="-translate-y-12" />
      </div>
      <div className="w-[90%] flex flex-row justify-between items-center text-[10px]">
        <p>Mr & Mme Rav David Amos</p>
        <p>Mr Yaacov Guy Lellouche</p>
      </div>
      <p className="w-[90%]">Mr & Mme Méir et Esthy Amos</p>
      <p className="w-[90%]">Ont la joie de vous faire part de la Bar Mitsvah de leur petit-fils et fils</p>
      <p className="text-text font-name text-[60px]">Ephraim Shimon</p>
      <p className="w-[90%]">C'est avec émotion que nous invitons à vous joindre à nous pour ce moment si précieux</p>
      <p className="w-[90%]">Nous serions honorés de votre présence à la mise de tephilins qui aura lieu b"h</p>
      <p className="text-lg font-bold">Lundi 27 avril 2026 <br />À 8:30 <br />Au Kotel</p>
      <p className="w-[90%]">• Un petit déjeuner sera servi à l'issue de l'office •</p>
      <p className="w-[90%] italic">"En ce jour si précieux, nos pensées s'élèvent avec tendresse vers ma grand-mère Mme Yael Lellouche Zal, présente à jamais dans nos coeurs"</p>
      <div className="flex flex-col gap-3 pt-3">
        <Waze name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" lat="" long="" text="Itinéraire Waze" />
        <SaveTheDate name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" date={[2026, 4, 27, 8, 30]} text="Ajouter au calendrier" />
      </div>
    </div>
  )

}
