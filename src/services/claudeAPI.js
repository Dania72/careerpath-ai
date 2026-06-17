const API_KEY = import.meta.env.VITE_GROQ_API_KEY

export async function generateRoadmap(goal) {
  const prompt = `You are a career coach. The user wants to: "${goal}"

Generate a learning roadmap as raw JSON only. No markdown, no extra text, just the JSON.

{
  "title": "Career Title",
  "readinessScore": 20,
  "phases": [
    {
      "name": "Beginner",
      "badge": "beginner",
      "duration": "6 weeks",
      "topics": [
        {
          "name": "Topic name",
          "hours": 10,
          "description": "What this topic covers",
          "resources": [
            { "title": "Resource name", "type": "yt", "url": "https://youtube.com" },
            { "title": "Course name", "type": "course", "url": "https://coursera.org" },
            { "title": "Paper name", "type": "paper", "url": "https://arxiv.org" }
          ]
        }
      ]
    },
    {
      "name": "Intermediate",
      "badge": "intermediate",
      "duration": "8 weeks",
      "topics": []
    },
    {
      "name": "Advanced",
      "badge": "advanced",
      "duration": "10 weeks",
      "topics": []
    }
  ],
  "milestones": [
    { "text": "Milestone description", "phase": "Beginner" }
  ]
}

Return 3 topics per phase, 2 resources per topic. Use real names and real URLs.`

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4000
    })
  })

  const data = await response.json()
  console.log('Groq response:', data)
  const text = data.choices[0].message.content
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}