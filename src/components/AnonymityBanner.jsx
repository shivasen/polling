import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

function AnonymityBanner() {
  return (
    <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-200 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <ShieldCheck className="w-8 h-8 text-primary-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Your Privacy is Protected
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            This poll is completely anonymous. We do not collect names, emails, or any personal information. 
            Your vote is secure and cannot be traced back to you.
          </p>
          <Link 
            to="/about" 
            className="text-sm font-medium text-primary-600 hover:text-primary-700 underline"
          >
            Read our full privacy policy & disclaimer →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AnonymityBanner
