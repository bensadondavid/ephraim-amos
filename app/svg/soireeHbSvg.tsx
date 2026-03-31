export default function SoireeHbSvg() {
  return (
    <svg
      viewBox="0 0 500 140"
      className="text-text w-full max-w-[500px]"
      aria-label="קבלת פנים"
      role="img"
    >
      <path
        id="soiree-hb-curve"
        d="M 60 130 Q 250 -50 440 130"
        fill="transparent"
      />
      <text
        fill="currentColor"
        className="font-bsd text-[25px] tracking-[-0.08em]"
        direction="rtl"
        unicodeBidi="bidi-override"
      >
        <textPath href="#soiree-hb-curve" startOffset="50%" textAnchor="middle">
          קבלת פנים
        </textPath>
      </text>
    </svg>
  )
}
