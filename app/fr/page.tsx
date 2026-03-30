/* eslint-disable react/no-unescaped-entities */
import CountDown from "@/components/ui/CountDown"
import Image from "next/image"
import Link from "next/link"

export default function Entry() {

  return (

    <div className="w-screen h-screen bg-[url('/fond-ephraim.png')] bg-repeat bg-cover flex flex-col justify-around items-center relative z-20">
        <p className="absolute top-4 right-4 text-text font-bsd">בס"ד</p>
        <Image src={'/logo-ephraim.png'} alt="Logo Sarah" width={200} height={200} loading="eager"/>
        <p className="text-white font-bsd text-2xl">בר מצווה</p>
        <p className="text-text font-name text-[60px]">Ephraim Shimon</p>
        <CountDown text={'flex-row'}/>
        <p className="text-text font-primary text-center italic text-[10px] w-9/10 my-4">
            ברוך ה׳ <br />
            Animés d’une profonde gratitude , nous avons le mérite et la grande joie 
            de célébrer la bar mitsvah de notre cher fils ,
            entourés de ceux qui nous sont chers 
        </p>
        <Link href='/fr/home' className="px-8 py-2 mb-2 bg-[#FDF8F0] text-text text-lg font-primary rounded-full">Voir la carte</Link>
    </div>

  )
}
