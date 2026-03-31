import SoireeHbSvg from "@/app/svg/soireeHbSvg"
import Image from "next/image"
import Waze from "@/components/ui/Waze"
import SaveTheDate from "@/components/ui/SaveTheDate"

export default function SoireeHb() {
  return (
    <div
      dir="rtl"
      className="w-full h-fit rounded-t-[50%_180px] rounded-b-[50%_180px] bg-[#E3D7C6] flex flex-col justify-center items-center gap-6 pb-16 text-center text-xs text-text font-primary"
    >
      <div className="flex flex-col justify-center items-center translate-y-8">
        <SoireeHbSvg />
        <Image src={"/logo-ephraim.png"} alt="logo" width={50} height={50} className="-translate-y-12" />
      </div>
      <p className="w-[90%]">מר וגברת מאיר ואסתי עמוס</p>
      <p className="text-text font-bsd text-[40px]">אפרים שמעון</p>
      <p className="w-[90%]">
        בשמחה ובהתרגשות הננו מזמינים אתכם לחגוג עמנו את האירוע המיוחד
        <br />
        שיתקיים בעז&quot;ה ביום
      </p>
      <p className="text-lg font-bold">
        יום שני, י&apos; באייר תשפ&quot;ו
        <br />
        27 באפריל 2026
        <br />
        בשעה 19:15
      </p>
      <p className="text-lg font-bold">
        בבית הכנסת הגדול בירושלים
        <br />
        רחוב המלך ג&apos;ורג&apos; 56
        <br />
        ירושלים
      </p>
      <div className="flex flex-col gap-3 pt-3">
        <Waze name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full" lat="31.776232" long="35.216980" text="Waze" />
        <SaveTheDate
          name="w-[160px] h-[40px] bg-[#FDF8F0] rounded-full"
          date={[2026, 4, 27, 19, 15]}
          text="הוספה ליומן"
        />
      </div>
    </div>
  )
}
