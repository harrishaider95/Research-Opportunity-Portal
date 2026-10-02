export default function HeroSection({ stats }) {
  return (
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
  )
}
