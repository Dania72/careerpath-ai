import { useState } from 'react'

const badgeColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-yellow-100 text-yellow-700',
  advanced: 'bg-purple-100 text-purple-700',
}

const resourceColors = {
  yt: 'bg-red-50 text-red-600 border-red-200',
  course: 'bg-blue-50 text-blue-600 border-blue-200',
  paper: 'bg-green-50 text-green-600 border-green-200',
}

const resourceIcons = {
  yt: '▶',
  course: '🎓',
  paper: '📄',
}

function RoadmapCard({ phase, phaseIndex, checked, onToggle }) {
  const [open, setOpen] = useState(phaseIndex === 0)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div
        className="flex items-center gap-3 p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[phase.badge]}`}>
          {phase.name}
        </span>
        <span className="font-semibold text-gray-900 flex-1">{phase.name} Phase</span>
        <span className="text-sm text-gray-400">⏱ {phase.duration}</span>
        <span className="text-gray-400 text-sm">{open ? '▲' : '▼'}</span>
      </div>

      {open && (
        <div className="border-t border-gray-100 p-5 flex flex-col gap-4">
          {phase.topics.map((topic, ti) => {
            const key = `${phaseIndex}-${ti}`
            const done = checked[key]
            return (
              <div
                key={ti}
                className={`border rounded-xl p-4 transition-all ${done ? 'border-purple-200 bg-purple-50' : 'border-gray-100'}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <button
                    onClick={() => onToggle(key)}
                    className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 border-2 flex items-center justify-center transition-colors ${done ? 'bg-purple-600 border-purple-600' : 'border-gray-300'}`}
                  >
                    {done && <span className="text-white text-xs">✓</span>}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`font-medium ${done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                        {topic.name}
                      </p>
                      <span className="text-xs text-gray-400">~{topic.hours}h</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-8">
                  {topic.resources.map((r, ri) => (
                    
                     <a key={ri}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1 hover:opacity-80 transition-opacity ${resourceColors[r.type]}`}
                    >
                      <span>{resourceIcons[r.type]}</span>
                      <span>{r.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default RoadmapCard