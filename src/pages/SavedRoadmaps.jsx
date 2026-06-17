import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SavedRoadmaps() {
  const [roadmaps, setRoadmaps] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRoadmaps') || '[]')
    setRoadmaps(saved)
  }, [])

  const deleteRoadmap = (id) => {
    const updated = roadmaps.filter(r => r.id !== id)
    setRoadmaps(updated)
    localStorage.setItem('savedRoadmaps', JSON.stringify(updated))
  }

  if (roadmaps.length === 0) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="text-5xl">📭</div>
      <h2 className="text-xl font-semibold text-gray-700">No saved roadmaps yet</h2>
      <p className="text-gray-400 text-sm">Generate a roadmap and click Save</p>
      <button
        onClick={() => navigate('/')}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium mt-2"
      >
        Build a Roadmap
      </button>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Roadmaps</h1>
      <div className="flex flex-col gap-4">
        {roadmaps.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-between gap-4"
          >
            <div>
              <h2 className="font-semibold text-gray-900 text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">"{item.goal}"</p>
              <p className="text-xs text-gray-400 mt-2">Saved on {item.savedAt}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('/roadmap', {
                  state: {
                    goal: item.goal,
                    savedRoadmap: item.roadmap,
                    savedChecked: item.checked
                  }
                })}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 font-medium"
              >
                View
              </button>
              <button
                onClick={() => deleteRoadmap(item.id)}
                className="bg-red-50 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-100 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedRoadmaps