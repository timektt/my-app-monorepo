export async function callGemini(prompt: string) {
  const apiKey = process.env.GEMINI_API_KEY

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": apiKey as string
    },
    body: JSON.stringify({
      contents: [
        { parts: [{ text: prompt }] }
      ]
    })
  })

  const data = await response.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(data)
}
