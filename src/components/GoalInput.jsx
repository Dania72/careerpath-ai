function GoalInput({ goal, setGoal, onSubmit }) {
  const handleKey = (e) => {
    if (e.key === 'Enter') onSubmit()
  }

  return (
    <div className="flex gap-3 max-w-2xl mx-auto">
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        onKeyDown={handleKey}
        placeholder="e.g. I want to become a Data Scientist"
        className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button
        onClick={onSubmit}
        disabled={!goal.trim()}
        className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-medium px-6 py-4 rounded-xl transition-colors shadow-sm whitespace-nowrap"
      >
        Build Roadmap →
      </button>
    </div>
  )
}

export default GoalInput