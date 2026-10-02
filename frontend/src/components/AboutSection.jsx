export default function AboutSection({ researchAreas }) {
  return (
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
  )
}
