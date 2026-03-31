import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const url = process.env.APPSCRIPT_URL

  try {
    const body = await req.json()

    const lastname = body.lastname?.trim()
    const firstname = body.firstname?.trim()
    const presence = body.presence

    const tefs = body.tefs === true || body.tefs === "true"
    const soiree = body.soiree === true || body.soiree === "true"

    const message = typeof body.message === "string" ? body.message.trim() : ""
    const rawNumber = body.number

    if (!url) {
      return NextResponse.json(
        { message: "APPSCRIPT_URL manquant" },
        { status: 500 }
      )
    }

    if (!lastname || !firstname) {
      return NextResponse.json(
        { message: "Nom et prénom requis" },
        { status: 400 }
      )
    }

    if (presence !== "assisteront" && presence !== "n'assisteront pas") {
      return NextResponse.json(
        { message: "Présence invalide" },
        { status: 400 }
      )
    }

    let number = ""

    if (presence === "assisteront") {
      const n = Number(rawNumber)

      if (!Number.isInteger(n) || n < 1) {
        return NextResponse.json(
          { message: "Nombre invalide" },
          { status: 400 }
        )
      }

      number = String(n)

      if (!tefs && !soiree) {
        return NextResponse.json(
          { message: "Aucun événement sélectionné" },
          { status: 400 }
        )
      }
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastname,
        firstname,
        presence,
        tefs,
        soiree,
        number,
        message,
      }),
    })

    let data: { success?: boolean; error?: string } | null = null

    try {
      data = await response.json()
    } catch {
      const text = await response.text()
      return NextResponse.json(
        {
          message: "Réponse invalide du script",
          detail: text,
        },
        { status: 502 }
      )
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Post failed",
          statusFromScript: response.status,
          detail: data,
        },
        { status: 502 }
      )
    }

    if (!data?.success) {
      return NextResponse.json(
        {
          message: "Erreur script",
          detail: data,
        },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { message: "Post succeeded" },
      { status: 200 }
    )
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json(
      { message: "Internal server error", error: msg },
      { status: 500 }
    )
  }
}