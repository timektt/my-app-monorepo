import type { NextApiRequest, NextApiResponse } from 'next'
import { callGemini } from '../../lib/ai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body
  const data = await callGemini(prompt || "Say hello!")
  res.status(200).json(data)
}
