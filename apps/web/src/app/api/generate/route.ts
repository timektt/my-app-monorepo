import { NextRequest } from 'next/server'
import { callGemini } from '../../../../src/lib/ai'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const data = await callGemini(prompt || "Say hello!")
  return Response.json(data)
}
