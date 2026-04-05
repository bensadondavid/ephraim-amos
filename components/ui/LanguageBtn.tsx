import Link from "next/link"

export default function LanguageBtn(){

    return(
        <div className="flex flex-row gap-2 text-center w-fit">
            <Link className="text-4xl" href={'/fr'}>🇫🇷</Link>
            <Link className="text-4xl" href={'/hb'}>🇮🇱</Link>
        </div>
    )
}