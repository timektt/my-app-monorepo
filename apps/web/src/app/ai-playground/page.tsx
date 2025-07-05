'use client'
import { useState } from 'react'

export default function AIPlayground() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    setResponse(data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response')
    setLoading(false)
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Playground</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="border p-2 flex-1"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
        />
        <button className="bg-blue-500 text-white px-4" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div className="mt-4 whitespace-pre-wrap border p-2">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  )
}
