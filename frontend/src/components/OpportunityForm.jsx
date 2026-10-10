import { useState } from 'react'
import {
  buttonClassName,
  emptyOpportunityForm,
  inputClassName,
  toOpportunityFormValues,
} from '../utils/opportunities'

export default function OpportunityForm({ opportunity, saving, onSubmit, onClose }) {
  const [form, setForm] = useState(
    opportunity ? toOpportunityFormValues(opportunity) : emptyOpportunityForm,
  )
  const isEditing = Boolean(opportunity)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submitForm(event) {
    event.preventDefault()
    onSubmit({
      title: form.title.trim(),
      description: form.description.trim(),
      researchArea: form.researchArea.trim(),
      facultyName: form.facultyName.trim(),
      department: form.department.trim(),
      requiredSkills: form.requiredSkills.split(',').map((skill) => skill.trim()).filter(Boolean),
      availablePositions: Number(form.availablePositions),
      applicationDeadline: form.applicationDeadline,
      status: form.status,
    })
  }

  return (
    <section className="mt-8 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
            {isEditing ? 'Manage listing' : 'Faculty workspace'}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            {isEditing ? 'Edit opportunity' : 'Post a research opportunity'}
          </h2>
          <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800"
        >
          Cancel
        </button>
      </div>
      <form onSubmit={submitForm} className="grid gap-x-5 gap-y-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 md:col-span-2">
          Research title *
          <input className={inputClassName} name="title" value={form.title} onChange={updateField} maxLength={200} required placeholder="e.g. Machine Learning for Climate Research" />
        </label>
        <label className="text-sm font-semibold text-slate-700 md:col-span-2">
          Description *
          <textarea className={`${inputClassName} min-h-28 resize-y`} name="description" value={form.description} onChange={updateField} required placeholder="Describe the project and what a student will work on." />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Research area *
          <input className={inputClassName} name="researchArea" value={form.researchArea} onChange={updateField} maxLength={120} required placeholder="e.g. Artificial Intelligence" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Faculty member *
          <input className={inputClassName} name="facultyName" value={form.facultyName} onChange={updateField} maxLength={120} required placeholder="Faculty member's name" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Department *
          <input className={inputClassName} name="department" value={form.department} onChange={updateField} maxLength={120} required placeholder="e.g. Computer Science" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Required skills * <span className="font-normal text-slate-500">(comma-separated)</span>
          <input className={inputClassName} name="requiredSkills" value={form.requiredSkills} onChange={updateField} required placeholder="Python, statistics, data analysis" />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Available positions *
          <input className={inputClassName} type="number" name="availablePositions" value={form.availablePositions} onChange={updateField} min="1" step="1" required />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Application deadline *
          <input className={inputClassName} type="date" name="applicationDeadline" value={form.applicationDeadline} onChange={updateField} required />
        </label>
        <label className="text-sm font-semibold text-slate-700">
          Status
          <select className={inputClassName} name="status" value={form.status} onChange={updateField}>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </label>
        <div className="flex flex-wrap gap-3 pt-2 md:col-span-2">
          <button type="submit" disabled={saving} className={`${buttonClassName} bg-indigo-600 px-5 text-white hover:bg-indigo-700`}>
            {saving ? 'Saving…' : isEditing ? 'Save changes' : 'Publish opportunity'}
          </button>
          <button type="button" onClick={onClose} className={`${buttonClassName} bg-slate-100 text-slate-700 hover:bg-slate-200`}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
