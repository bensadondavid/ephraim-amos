import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"
import Image from "next/image"
import TefsHbSvg from "@/app/svg/tefsHbSvg"

export default function TefsHb() {
  return (
    <div
      dir="rtl"
      className="w-full h-fit rounded-t-[50%_180px] bg-transparent flex flex-col justify-center items-center gap-6 pb-16 text-center text-xs text-text font-primary shadow-[0_-10px_20px_-12px_rgba(0,0,0,0.60)]"
    >
      <div className="flex flex-col justify-center items-center translate-y-8">
        <TefsHbSvg />
        <Image src={"/logo-ephraim.png"} alt="logo" width={50} height={50} className="-translate-y-12" />
      </div>
      <div className="w-[90%] flex flex-row justify-between items-center text-[10px]">
        <p>מר וגברת הרב דוד עמוס</p>
        <p>מר יעקב גיא ללוש</p>
      </div>
      <p className="w-[90%]">מר וגברת מאיר ואסתי עמוס</p>
      <p className="w-[90%]">שמחים להזמינכם לבר המצווה של בנם ונכדם</p>
      <p className="text-text font-bsd text-[40px]">אפרים שמעון</p>
      <p className="w-[90%]">נשמח מאוד שתצטרפו אלינו לרגע המיוחד והמרגש הזה</p>
      <p className="w-[90%]">ונכבד את נוכחותכם בהנחת התפילין שתתקיים בעז&quot;ה</p>
      <p className="text-lg font-bold">
        יום שני, י&apos; באייר תשפ&quot;ו
        <br />
        27 באפריל 2026
        <br />
        בשעה 8:30
        <br />
        ברחבת הכותל המערבי
      </p>
      <p className="w-[90%]">• כיבוד קל יוגש בתום התפילה •</p>
      <p className="w-[90%] italic">
        &quot;ביום מרגש זה, מחשבותינו עולות באהבה ובגעגוע אל סבתא יעל ללוש ז&quot;ל,
        שנוכחת בליבנו לעד&quot;
      </p>
      <div className="flex flex-col gap-3 pt-3">
        <Waze name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" lat="31.775555" long="35.233749" text="ניווט ב-Waze" />
        <SaveTheDate
          name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full"
          date={[2026, 4, 27, 8, 30]}
          text="הוספה ליומן"
        />
      </div>
    </div>
  )
}
