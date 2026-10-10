export default function HeroBanner({ totalCount, openCount, closedCount, onNavigate }) {
  const stats = [
    { label: 'Total postings', value: totalCount },
    { label: 'Open', value: openCount },
    { label: 'Closed', value: closedCount },
  ]

  return (
    <section className="overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-9 text-white shadow-xl shadow-indigo-950/10 sm:px-10 sm:py-12">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-300">Research opportunities</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Make your next research move.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            One place for students and faculty to discover, share, and manage meaningful research work.
          </p>
          <a
            href="/browse"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/browse')
            }}
            className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-indigo-50"
          >
            Explore openings <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-24 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
