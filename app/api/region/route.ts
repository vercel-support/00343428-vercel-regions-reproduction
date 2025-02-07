import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET() {
  const region = process.env.VERCEL_REGION || "Unknown"
  return NextResponse.json({ region })
}

