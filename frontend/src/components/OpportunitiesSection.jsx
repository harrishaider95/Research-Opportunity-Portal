export default function OpportunitiesSection({ opportunities }) {
  return (
    <section id="opportunities" className="mt-8 py-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">Featured</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Research opportunities</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {opportunities.map((opportunity) => (
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
  )
}
