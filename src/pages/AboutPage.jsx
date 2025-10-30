import { ShieldCheck, Lock, BarChart3, AlertTriangle } from 'lucide-react'

function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Poll</h1>
          <p className="text-xl text-gray-600">
            Transparency, Privacy, and Public Opinion
          </p>
        </div>

        <div className="space-y-8">
          <section className="card">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">Important Disclaimer</h2>
            </div>
            <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
              <p>
                <strong>This website is an independent project and is not affiliated with any political party, candidate, or media organization.</strong> It operates as a platform for gathering public sentiment and opinion.
              </p>
              <p>
                This is an <strong>unofficial public opinion poll</strong>, not a scientific exit poll or survey. The results reflect the opinions of only those who have chosen to participate and should not be considered statistically representative of the broader population.
              </p>
              <p>
                The data collected through this platform represents voluntary participation and may be subject to selection bias. Results should be interpreted as indicative of participant sentiment rather than definitive electoral predictions.
              </p>
            </div>
          </section>

          <section className="card">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data & Anonymity</h2>
            </div>
            <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
              <p>
                <strong>We do not collect any personal information like names or email addresses.</strong> All responses are 100% anonymous. Your privacy is our top priority.
              </p>
              <p>
                To maintain the integrity of the poll and prevent duplicate votes, we use IP-based and cookie-based filtering mechanisms. However, this technical data is used solely for vote validation and is not stored permanently or shared with any third parties.
              </p>
              <p>
                No voting data can be traced back to individual users. The system only tracks aggregated, anonymous vote counts per district and candidate.
              </p>
            </div>
          </section>

          <section className="card">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Vote Prevention Measures</h2>
            </div>
            <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
              <p>
                To ensure fair and credible results, we implement multiple layers of duplicate vote prevention:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookie-based tracking:</strong> A secure cookie is set on your device after voting</li>
                <li><strong>Local storage validation:</strong> Your browser remembers that you have voted</li>
                <li><strong>IP-based filtering:</strong> Network-level checks help prevent multiple votes from the same source</li>
              </ul>
              <p>
                These measures protect the poll's credibility while maintaining complete anonymity of your vote.
              </p>
            </div>
          </section>

          <section className="card">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            </div>
            <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Select your district from the dropdown menu</li>
                <li>Choose your preferred candidate</li>
                <li>Submit your anonymous vote</li>
                <li>View real-time aggregated results across all districts</li>
              </ol>
              <p className="mt-4">
                Results are calculated and displayed immediately, showing the distribution of votes across candidates for each district.
              </p>
            </div>
          </section>

          <section className="card bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
              <p>
                We are committed to providing a transparent, secure, and anonymous platform for public opinion. This project exists to give citizens a voice and to provide insight into public sentiment.
              </p>
              <p>
                All data handling practices prioritize user privacy and data protection. We encourage responsible interpretation of poll results and welcome feedback on how we can improve this platform.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
