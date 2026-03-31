import FormHb from "./FormHb"

export default function ResponseHb() {
  return (
    <div dir="rtl" className="text-text flex flex-col items-center gap-3 pt-12 pb-15 overflow-hidden">
      <p className="font-bsd text-xl">תשובה</p>
      <p className="italic font-primary text-xs pb-4">נשמח לקבל את תשובתכם בהקדם</p>
      <FormHb />
    </div>
  )
}
