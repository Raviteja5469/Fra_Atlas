import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get("file") as File | null
    if (!file) return NextResponse.json({ ok: false, error: "No file" }, { status: 400 })

    // In a real app, stream to storage (S3, local fs, etc.). Here we just echo meta.
    const meta = { name: file.name, size: file.size, type: file.type }
    return NextResponse.json({ ok: true, file: meta })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Upload error" }, { status: 500 })
  }
}


