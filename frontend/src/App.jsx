import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OpportunitiesSection from './components/OpportunitiesSection'

const stats = [
  { value: '280+', label: 'Research labs' },
  { value: '4.8/5', label: 'Mentor rating' },
  { value: '1200+', label: 'Open roles' },
]

const featuredOpportunities = [
  {
    title: 'AI for Healthcare Fellowship',
    type: 'Fellowship',
    location: 'Boston, MA',
    details: 'Remote-friendly, 6-month program with biomedical AI mentorship.',
  },
  {
    title: 'Climate Data Research Assistant',
    type: 'Internship',
    location: 'London, UK',
    details: 'Work on satellite analytics and environmental forecasting models.',
  },
  {
    title: 'Computational Biology PhD Track',
    type: 'PhD',
    location: 'Berlin, Germany',
    details: 'Apply machine learning to genomic datasets and translational biology.',
  },
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
