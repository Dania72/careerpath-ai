import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import GoalInput from '../components/GoalInput'

function Home() {
  const navigate = useNavigate()
  const [goal, setGoal] = useState('')

  const examples = [
    'Data Scientist',
    'UX Designer',
    'Backend Developer',
    'Product Manager',
    'Cybersecurity Analyst',
    'AI Engineer',
  ]

  const handleSubmit = () => {
    if (!goal.trim()) return
    navigate('/roadmap', { state: { goal } })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          AI-Powered Career Roadmaps
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Your personalized path to{' '}
          <span className="text-purple-600">any career</span>
        </h1>

        <p className="text-lg text-gray-500 mb-10">
          Type your career goal and get a complete roadmap — topics, YouTube videos, courses, research papers and milestones, all in one place.
        </p>

        <GoalInput goal={goal} setGoal={setGoal} onSubmit={handleSubmit} />

        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-3">Try an example</p>
          <div className="flex flex-wrap justify-center gap-2">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setGoal(`I want to become a ${ex}`)}
                className="text-sm px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-colors bg-white"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: '🗺️', title: 'Full Roadmap', desc: 'Phase by phase learning path from beginner to advanced' },
            { icon: '📚', title: 'All Resources', desc: 'YouTube videos, online courses and research papers per topic' },
            { icon: '✅', title: 'Track Progress', desc: 'Check off topics and watch your progress grow' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home