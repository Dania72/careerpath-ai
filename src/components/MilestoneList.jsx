function MilestoneList({ milestones }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h2 className="font-bold text-gray-900 text-lg mb-4">🏁 Milestones</h2>
      <div className="flex flex-col gap-3">
        {milestones.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
            <p className="text-sm text-gray-700 flex-1">{m.text}</p>
            <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded-full">{m.phase}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MilestoneList