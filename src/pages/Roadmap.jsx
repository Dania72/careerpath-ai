import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { generateRoadmap } from '../services/claudeAPI'
import ProgressBar from '../components/ProgressBar'
import RoadmapCard from '../components/RoadmapCard'
import MilestoneList from '../components/MilestoneList'

function Roadmap() {
  const location = useLocation()
  const navigate = useNavigate()
  const goal = location.state?.goal

  const [roadmap, setRoadmap] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [checked, setChecked] = useState({})
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!goal) { navigate('/'); return }
    const { savedRoadmap, savedChecked } = location.state || {}
    if (savedRoadmap) {
      setRoadmap(savedRoadmap)
      setChecked(savedChecked || {})
      setLoading(false)
    } else {
      fetchRoadmap()
    }
  }, [goal])

  const fetchRoadmap = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await generateRoadmap(goal)
      setRoadmap(data)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleCheck = (key) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const saveRoadmap = () => {
    const existing = JSON.parse(localStorage.getItem('savedRoadmaps') || '[]')
    const newEntry = {
      id: Date.now(),
      goal,
      title: roadmap.title,
      roadmap,
      checked,
      savedAt: new Date().toLocaleDateString()
    }
    const updated = [newEntry, ...existing]
    localStorage.setItem('savedRoadmaps', JSON.stringify(updated))
    setSaved(true)
  }

  const getTotalTopics = () => {
    if (!roadmap) return 0
    return roadmap.phases.reduce((acc, p) => acc + p.topics.length, 0)
  }

  const getDoneTopics = () => Object.values(checked).filter(Boolean).length

  const getPercent = () => {
    const total = getTotalTopics()
    if (!total) return 0
    return Math.round((getDoneTopics() / total) * 100)
  }

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      <p className="text-gray-500 text-lg">Building your personalized roadmap...</p>
      <p className="text-gray-400 text-sm">This may take a few seconds</p>
    </div>
  )

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-red-500">{error}</p>
      <button
        onClick={fetchRoadmap}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
      >
        Try Again
      </button>
    </div>
  )

  if (!roadmap) return null

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{roadmap.title} Roadmap</h1>
            <p className="text-gray-500 mt-1 text-sm">"{goal}"</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-1">Readiness Score</p>
              <p className="text-3xl font-bold text-purple-600">{roadmap.readinessScore}%</p>
            </div>
            <button
              onClick={saveRoadmap}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                saved
                  ? 'bg-green-100 text-green-700'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {saved ? '✓ Saved!' : 'Save Roadmap'}
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{getDoneTopics()}</p>
            <p className="text-xs text-gray-500 mt-1">Topics Done</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{getTotalTopics()}</p>
            <p className="text-xs text-gray-500 mt-1">Total Topics</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{getPercent()}%</p>
            <p className="text-xs text-gray-500 mt-1">Complete</p>
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar percent={getPercent()} />
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {roadmap.phases.map((phase, pi) => (
          <RoadmapCard
            key={pi}
            phase={phase}
            phaseIndex={pi}
            checked={checked}
            onToggle={toggleCheck}
          />
        ))}
      </div>

      <MilestoneList milestones={roadmap.milestones} />

    </div>
  )
}

export default Roadmap