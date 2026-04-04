export default function TefsSvg() {
  return (
    <svg
      viewBox="0 0 500 140"
      className="text-text w-full max-w-[500px]"
      aria-label="MISE DES TEPHILINS"
      role="img"
    >
      <path
        id="tefilins-curve"
        d="M 60 130 Q 250 -50 440 130"

        fill="transparent"
      />
      <text
        fill="currentColor"
        className="font-primary text-[30px] tracking-[-0.08em]"
      >
        <textPath href="#tefilins-curve" startOffset="50%" textAnchor="middle">
          MISE DES TEPHILINS
        </textPath>
      </text>
    </svg>
  )
}
