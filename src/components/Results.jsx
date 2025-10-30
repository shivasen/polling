import { Users } from 'lucide-react'

function Results({ data }) {
  const getTotalVotes = (districtData) => {
    return Object.values(districtData).reduce((sum, votes) => sum + votes, 0)
  }

  const getPercentage = (votes, total) => {
    return total > 0 ? ((votes / total) * 100).toFixed(1) : 0
  }

  const getPartyColor = (party) => {
    const colors = {
      'DMK': 'bg-red-600',
      'ADMK': 'bg-black',
      'BJP': 'bg-orange-500',
      'NTK': 'bg-red-800',
      'INC': 'bg-sky-500',
      'TVK': 'bg-yellow-500',
      'Others': 'bg-gray-500'
    }
    return colors[party] || 'bg-gray-400'
  }

  const districts = Object.keys(data).sort()

  if (districts.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No votes recorded yet. Be the first to vote!</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {districts.map((district) => {
        const districtData = data[district]
        const totalVotes = getTotalVotes(districtData)
        const parties = Object.keys(districtData).sort((a,b) => districtData[b] - districtData[a])

        return (
          <div key={district} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{district}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}</span>
              </div>
            </div>

            <div className="space-y-3">
              {parties.map((party) => {
                const votes = districtData[party]
                const percentage = getPercentage(votes, totalVotes)

                return (
                  <div key={party}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{party}</span>
                      <span className="text-sm font-semibold text-gray-800">{votes} ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${getPartyColor(party)}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Results
