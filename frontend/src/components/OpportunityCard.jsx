import { formatDate } from '../utils/opportunities'

export default function OpportunityCard({ opportunity, selected, onSelect }) {
  return (
    <article
      className={`rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
        selected ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
          {opportunity.researchArea}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${
          opportunity.status === 'Open'
            ? 'bg-emerald-50 text-emerald-700'
            : 'bg-slate-100 text-slate-600'
        }`}>
          {opportunity.status}
        </span>
      </div>
      <button type="button" onClick={onSelect} className="mt-4 block text-left">
        <h3 className="text-xl font-bold leading-snug text-slate-950 transition hover:text-indigo-700">
          {opportunity.title}
        </h3>
      </button>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{opportunity.description}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Faculty</div>
          <div className="mt-1 font-medium text-slate-700">{opportunity.facultyName}</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Positions</div>
          <div className="mt-1 font-medium text-slate-700">{opportunity.availablePositions}</div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {opportunity.requiredSkills.map((skill) => (
          <span key={skill} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{skill}</span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-500">Deadline: {formatDate(opportunity.applicationDeadline)}</span>
        <button type="button" onClick={onSelect} className="text-sm font-bold text-indigo-700 hover:text-indigo-900">
          View details <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  )
}
