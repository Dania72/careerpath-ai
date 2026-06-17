function ProgressBar({ percent }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-3">
      <div
        className="bg-purple-600 h-3 rounded-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar