import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import SavedRoadmaps from './pages/SavedRoadmaps'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/saved" element={<SavedRoadmaps />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App