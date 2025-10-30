import { useState } from 'react'
import { Vote, User } from 'lucide-react'
import districts from '../data/districts.json'
import TamilNaduMap from './TamilNaduMap'

function VotingForm({ onVote }) {
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedParty, setSelectedParty] = useState('')

  const parties = [
    { name: 'DMK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Dravida_Munnetra_Kazhagam_logo.svg/1200px-Dravida_Munnetra_Kazhagam_logo.svg.png' },
    { name: 'ADMK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AIADMK_flag_and_symbol.svg/1024px-AIADMK_flag_and_symbol.svg.png' },
    { name: 'BJP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png' },
    { name: 'NTK', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Naam_Tamilar_Katchi_flag.svg/1200px-Naam_Tamilar_Katchi_flag.svg.png' },
    { name: 'INC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Indian_National_Congress_hand_symbol.svg/1200px-Indian_National_Congress_hand_symbol.svg.png' },
    { name: 'TVK', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Tamilaga_Vetri_Kazhagam_flag.jpg' },
    { name: 'Others', logo: null }
  ];

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedDistrict && selectedParty) {
      onVote(selectedDistrict, selectedParty)
    }
  }

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary-100 p-2 rounded-lg">
          <Vote className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Cast Your Vote</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            1. Select Your District (Hover over map or use dropdown)
          </label>
          <TamilNaduMap 
            selectedDistrict={selectedDistrict}
            onDistrictSelect={setSelectedDistrict}
          />
          <select
            id="district"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
            required
          >
            <option value="">Choose a district from the list...</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            2. Choose a Party
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {parties.map((party) => (
              <label
                key={party.name}
                className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedParty === party.name
                    ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-primary-400 bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="party"
                  value={party.name}
                  checked={selectedParty === party.name}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="absolute opacity-0 w-0 h-0"
                  required
                />
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 border-2 border-white shadow-inner overflow-hidden">
                  {party.logo ? (
                    <img src={party.logo} alt={`${party.name} logo`} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <span className="font-semibold text-center text-gray-800">{party.name}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!selectedDistrict || !selectedParty}
          className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
        >
          <Vote className="w-5 h-5" />
          <span>Submit My Vote</span>
        </button>
      </form>
    </div>
  )
}

export default VotingForm
