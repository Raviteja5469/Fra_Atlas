import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    const reply = `You said: ${typeof message === "string" ? message : "(no message)"}. This is a placeholder response.`
    return NextResponse.json({ reply })
  } catch (e) {
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 400 })
  }
}


