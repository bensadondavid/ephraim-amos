'use client'

import { useState } from "react"
import { Tailspin } from "ldrs/react"
import "ldrs/react/Tailspin.css"
import { motion } from "motion/react"

interface FormData {
  lastname: string
  firstname: string
  presence: "assisteront" | "n'assisteront pas" | null
  tefs: boolean
  soiree: boolean
  number: string
  message: string
}

const FormHb = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const [formData, setFormdata] = useState<FormData>({
    lastname: "",
    firstname: "",
    presence: null,
    tefs: false,
    soiree: false,
    number: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormdata((prev) => {
      if (name === "presence" && value === "n'assisteront pas") {
        return { ...prev, presence: value, tefs: false, soiree: false, number: "" }
      }
      if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
        return { ...prev, [name]: e.target.checked }
      }
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (formData.presence === "assisteront" && !formData.tefs && !formData.soiree) {
        alert("יש לבחור לפחות אירוע אחד")
        setLoading(false)
        return
      }

      const response = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        console.log(data)
        alert("אנא נסו שוב")
        return
      }

      const data = await response.json()
      console.log(data)
      alert("תודה על תשובתכם!")
      setFormdata({
        lastname: "",
        firstname: "",
        presence: null,
        tefs: false,
        soiree: false,
        number: "",
        message: "",
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      dir="rtl"
      className="flex flex-col gap-3 justify-center h-full w-full font-primary text-text"
      onSubmit={handleSubmit}
    >
      <motion.label
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col w-[90%] gap-2 mr-5 text-right"
      >
        שם משפחה* : <br />
        <input
          className="bg-form rounded-full px-8 py-2 border border-none text-right"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </motion.label>

      <motion.label
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col w-[90%] gap-2 mr-5 text-right"
      >
        שם פרטי* :<br />
        <input
          className="bg-form rounded-full px-8 py-2 border border-none text-right"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </motion.label>

      <label className="flex items-center gap-3 mt-3 mr-5">
        <input
          className="sr-only"
          type="radio"
          name="presence"
          value={"assisteront"}
          checked={formData.presence === "assisteront"}
          onChange={handleChange}
          required
        />
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-text bg-white transition-colors">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-text transition-opacity ${formData.presence === "assisteront" ? "opacity-100" : "opacity-0"}`}
          />
        </span>
        <span>נגיע</span>
      </label>

      {formData.presence === "assisteront" ? (
        <>
          <label className="flex items-center gap-3 mr-7">
            <input
              type="checkbox"
              name="tefs"
              checked={formData.tefs}
              onChange={handleChange}
              className="sr-only"
            />
            <span
              className={`flex h-3 w-3 items-center justify-center rounded-full border border-text transition-colors ${formData.tefs ? "bg-text" : "bg-white"}`}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className={`h-1.5 w-1.5 transition-opacity ${formData.tefs ? "text-white opacity-100" : "text-text opacity-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3.5 8 3 3 6-6" />
              </svg>
            </span>
            <span>הנחת תפילין</span>
          </label>

          <label className="flex items-center gap-3 mr-7">
            <input
              type="checkbox"
              name="soiree"
              checked={formData.soiree}
              onChange={handleChange}
              className="sr-only"
            />
            <span
              className={`flex h-3 w-3 items-center justify-center rounded-full border border-text transition-colors ${formData.soiree ? "bg-text" : "bg-white"}`}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className={`h-1.5 w-1.5 transition-opacity ${formData.soiree ? "text-white opacity-100" : "text-text opacity-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3.5 8 3 3 6-6" />
              </svg>
            </span>
            <span>האירוע בערב</span>
          </label>

          <label className="flex flex-col w-[80%] gap-2 mr-7 mb-5 text-right">
            מספר משתתפים* :<br />
            <input
              className="bg-form rounded-full px-8 py-2 border border-none text-right"
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              min={1}
              step={1}
              inputMode="numeric"
            />
          </label>
        </>
      ) : null}

      <label className="flex items-center gap-3 mb-4 mr-5">
        <input
          className="sr-only"
          type="radio"
          name="presence"
          value={"n'assisteront pas"}
          checked={formData.presence === "n'assisteront pas"}
          onChange={handleChange}
        />
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-text bg-white transition-colors">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-text transition-opacity ${formData.presence === "n'assisteront pas" ? "opacity-100" : "opacity-0"}`}
          />
        </span>
        <span>לא נגיע</span>
      </label>

      <label className="flex flex-col w-[90%] gap-2 mr-5 text-right">
        הודעה :<br />
        <textarea
          className="bg-form rounded-3xl px-9 py-2 border-none text-right"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <motion.button
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[160px] h-[40px] bg-form text-text mx-auto py-1 rounded-full mt-5 flex items-center justify-center"
        type="submit"
        disabled={loading}
      >
        {loading ? <Tailspin size="20" stroke="5" speed="0.9" color="#EFCBD5" /> : "שליחה"}
      </motion.button>
    </form>
  )
}

export default FormHb
