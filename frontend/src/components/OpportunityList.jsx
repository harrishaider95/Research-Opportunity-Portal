import OpportunityCard from './OpportunityCard'
import { buttonClassName } from '../utils/opportunities'

const statuses = ['All', 'Open', 'Closed']

function EmptyState({ hasOpportunities, onCreate }) {
  return (
    <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-xl text-indigo-700">⌕</div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {hasOpportunities ? 'No matching opportunities' : 'No opportunities posted yet'}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {hasOpportunities
          ? 'Try another search term or change the status filter.'
          : 'Faculty can publish the first opening. New postings will appear here from the database.'}
      </p>
      {!hasOpportunities && (
        <button type="button" onClick={onCreate} className={`${buttonClassName} mt-5 bg-indigo-600 text-white hover:bg-indigo-700`}>
          Post the first opportunity
        </button>
      )}
    </div>
  )
}

export default function OpportunityList({
  opportunities,
  totalCount,
  loading,
  selectedId,
  search,
  statusFilter,
  onSearchChange,
  onStatusChange,
  onSelect,
  onCreate,
}) {
  return (
    <section id="opportunities" className="mt-11 scroll-mt-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">Discover</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Research openings</h2>
          <p className="mt-2 text-sm text-slate-500">Browse current projects and find one that fits your interests.</p>
        </div>
        <div className="flex flex-col gap-3 sm:w-[25rem]">
          <label className="sr-only" htmlFor="opportunity-search">Search opportunities</label>
          <input
            id="opportunity-search"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search title, area, faculty, or skill"
          />
          <div className="flex gap-2" aria-label="Filter opportunities by status">
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => onStatusChange(status)}
                aria-pressed={statusFilter === status}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  statusFilter === status
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
          Loading opportunities…
        </div>
      ) : opportunities.length === 0 ? (
        <EmptyState hasOpportunities={totalCount > 0} onCreate={onCreate} />
      ) : (
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              selected={selectedId === opportunity.id}
              onSelect={() => onSelect(opportunity.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
