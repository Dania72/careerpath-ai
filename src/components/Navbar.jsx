import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">CP</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">CareerPath</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/saved"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/saved'
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Saved Roadmaps
          </Link>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar