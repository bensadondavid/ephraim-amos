import FormFr from "./FormFr"

export default function ResponseFr(){

    return(
        <div className="text-text flex flex-col items-center gap-3 pt-12 pb-15 overflow-hidden">
            <p className="font-title text-xl">CARTON RÉPONSE</p>
            <p className="italic font-primary text-xs pb-4">Réponse souhaitée dans les plus brefs délais</p>
            <FormFr />
        </div>
    )

}