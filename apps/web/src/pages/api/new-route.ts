import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  time: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'New API Route', time: new Date().toLocaleTimeString() })
}
