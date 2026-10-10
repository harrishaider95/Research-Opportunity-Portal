import { buttonClassName, formatDate } from '../utils/opportunities'

function DetailItem({ label, value }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-800">{value}</div>
    </div>
  )
}

export default function OpportunityDetails({
  opportunity,
  onBack,
  onEdit,
  onToggleStatus,
  onDelete,
}) {
  if (!opportunity) return null

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="details-title">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
      >
        ← Back to opportunities
      </button>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Opportunity details</p>
          <h2 id="details-title" className="mt-2 text-2xl font-bold text-slate-950">{opportunity.title}</h2>
          <p className="mt-2 text-sm text-slate-500">{opportunity.department} · {opportunity.facultyName}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={onEdit} className={`${buttonClassName} bg-indigo-50 text-indigo-700 hover:bg-indigo-100`}>
            Edit
          </button>
          <button type="button" onClick={onToggleStatus} className={`${buttonClassName} bg-amber-50 text-amber-800 hover:bg-amber-100`}>
            {opportunity.status === 'Open' ? 'Close opportunity' : 'Reopen opportunity'}
          </button>
          <button type="button" onClick={onDelete} className={`${buttonClassName} bg-rose-50 text-rose-700 hover:bg-rose-100`}>
            Delete
          </button>
        </div>
      </div>
      <p className="mt-6 max-w-4xl whitespace-pre-wrap text-sm leading-7 text-slate-600">{opportunity.description}</p>
      <div className="mt-6 grid gap-5 border-t border-slate-100 pt-6 sm:grid-cols-2 lg:grid-cols-5">
        <DetailItem label="Research area" value={opportunity.researchArea} />
        <DetailItem label="Department" value={opportunity.department} />
        <DetailItem label="Available positions" value={opportunity.availablePositions} />
        <DetailItem label="Application deadline" value={formatDate(opportunity.applicationDeadline)} />
        <DetailItem label="Status" value={opportunity.status} />
      </div>
      <div className="mt-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Required skills</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {opportunity.requiredSkills.map((skill) => (
            <span key={skill} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
