import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import VotingForm from '../components/VotingForm'
import Results from '../components/Results'
import AnonymityBanner from '../components/AnonymityBanner'

function HomePage() {
  const [hasVoted, setHasVoted] = useState(false)
  const [votingData, setVotingData] = useState(() => {
    const saved = localStorage.getItem('pollResults')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    const voted = Cookies.get('hasVoted') || localStorage.getItem('hasVoted')
    if (voted) {
      setHasVoted(true)
    }
  }, [])

  const handleVote = (district, party) => {
    const newData = { ...votingData }
    if (!newData[district]) {
      newData[district] = {}
    }
    newData[district][party] = (newData[district][party] || 0) + 1
    
    setVotingData(newData)
    localStorage.setItem('pollResults', JSON.stringify(newData))
    
    Cookies.set('hasVoted', 'true', { expires: 365 })
    localStorage.setItem('hasVoted', 'true')
    setHasVoted(true)
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnonymityBanner />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            District Public Opinion Poll
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cast your anonymous vote and see real-time results across all districts. Your opinion matters!
          </p>
        </div>

        {hasVoted ? (
          <div className="space-y-6">
            <div className="card bg-green-50 border border-green-200">
              <div className="flex items-center space-x-3 text-green-800">
                <CheckCircle className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Thank you for voting!</h3>
                  <p className="text-sm text-green-700">Your anonymous vote has been recorded.</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Current Results</h2>
              </div>
              <Results data={votingData} />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="card bg-blue-50 border border-blue-200">
              <div className="flex items-start space-x-3 text-blue-800">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Important Information:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>You can only vote once (enforced by cookie and local storage)</li>
                    <li>Your vote is completely anonymous - no personal data is collected</li>
                    <li>Results are displayed in real-time after voting</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <VotingForm onVote={handleVote} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
