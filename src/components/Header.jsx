import { Link, useLocation } from 'react-router-dom'
import { Vote, Info } from 'lucide-react'

function Header() {
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Vote className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">District Polling</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Vote
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
