import { Link } from 'react-router-dom'
import { ShieldCheck, Lock } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">About This Poll</h3>
            <p className="text-sm text-gray-400">
              An independent, unofficial public opinion poll. Not affiliated with any political party or organization.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Privacy & Security</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-primary-400" />
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-primary-400" />
                <span>Duplicate Vote Prevention</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-white transition-colors">
                Vote Now
              </Link>
              <Link to="/about" className="block hover:text-white transition-colors">
                About & Disclaimer
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 District Polling Platform. All rights reserved.</p>
          <p className="mt-1">This is an unofficial poll for public opinion only.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
