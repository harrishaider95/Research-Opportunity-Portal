import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OpportunitiesSection from './components/OpportunitiesSection'
import featuredOpportunities from './data/featuredOpportunities'

const stats = [
  { value: '280+', label: 'Research labs' },
  { value: '4.8/5', label: 'Mentor rating' },
  { value: '1200+', label: 'Open roles' },
]

const researchAreas = ['Artificial Intelligence', 'Climate Science', 'Bioinformatics', 'Robotics', 'Public Policy']

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <main id="home" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <HeroSection stats={stats} />
        <OpportunitiesSection opportunities={featuredOpportunities} />
        <AboutSection researchAreas={researchAreas} />
      </main>
    </div>
  )
}

export default App
