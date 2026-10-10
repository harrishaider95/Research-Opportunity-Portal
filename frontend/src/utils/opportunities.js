export const emptyOpportunityForm = {
  title: '',
  description: '',
  researchArea: '',
  facultyName: '',
  department: '',
  requiredSkills: '',
  availablePositions: '1',
  applicationDeadline: '',
  status: 'Open',
}

export const inputClassName = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'

export const buttonClassName = 'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60'

export function formatDate(value) {
  if (!value) return 'Not set'
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function toOpportunityFormValues(opportunity) {
  return {
    ...opportunity,
    requiredSkills: opportunity.requiredSkills.join(', '),
    availablePositions: String(opportunity.availablePositions),
  }
}
