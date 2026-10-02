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
      <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-xl font-bold text-slate-900">
            ResearchHub
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-slate-900">Home</a>
            <a href="#opportunities" className="text-sm font-medium text-slate-600 hover:text-slate-900">Opportunities</a>
            <a href="#mentors" className="text-sm font-medium text-slate-600 hover:text-slate-900">Mentors</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
          </div>

          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
            Join now
          </button>
        </div>
      </nav>

      <main id="home" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">
              Updated weekly
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Discover the next big step in your research journey.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Explore scholarships, internships, fellowships, and lab opportunities designed for aspiring researchers and academic innovators.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
                Explore opportunities
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Become a mentor
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200 ring-1 ring-slate-800">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Featured opportunity
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white">Quantum Computing Research Sprint</h2>

            <p className="mt-4 text-slate-300">
              A 12-week intensive project for students exploring quantum algorithms and applied systems engineering.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-200">Hybrid</span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-200">Paid</span>
              <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-200">Deadline in 8 days</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                Mentorship from industry and academic researchers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                Hands-on project with publication support
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                Strong networking with global research teams
              </li>
            </ul>
          </div>
        </section>

        <section id="opportunities" className="mt-8 py-8">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Featured</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Research opportunities</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredOpportunities.map((opportunity) => (
              <div key={opportunity.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                    {opportunity.type}
                  </span>
                  <span className="text-xs text-slate-500">{opportunity.location}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900">{opportunity.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{opportunity.details}</p>

                <button className="mt-6 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">
                  View details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-8 grid gap-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Why ResearchHub</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">Built for students, researchers, and mentors.</h3>
            <p className="mt-4 text-slate-600">
              We connect ambitious students with credible opportunities, support career growth, and create space for collaboration across disciplines.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Areas</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchAreas.map((area) => (
                <span key={area} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
