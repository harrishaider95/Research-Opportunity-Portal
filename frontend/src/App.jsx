import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  createOpportunity,
  deleteOpportunity,
  getOpportunities,
  updateOpportunity,
} from './api/opportunities'
import HeroBanner from './components/HeroBanner'
import NoticeBanner from './components/NoticeBanner'
import OpportunityDetails from './components/OpportunityDetails'
import OpportunityForm from './components/OpportunityForm'
import OpportunityList from './components/OpportunityList'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

function getRouteFromPath() {
  const segments = window.location.pathname.split('/').filter(Boolean)

  if (segments.length === 0 || (segments.length === 1 && segments[0] === 'home')) {
    return { page: 'home', opportunityId: null }
  }
  if (segments.length === 1 && segments[0] === 'browse') {
    return { page: 'browse', opportunityId: null }
  }
  if (segments.length === 1 && segments[0] === 'add') {
    return { page: 'add', opportunityId: null }
  }
  if (segments.length === 2 && segments[0] === 'opportunity' && segments[1]) {
    return {
      page: 'detail',
      opportunityId: segments[1],
    }
  }

  return { page: 'notFound', opportunityId: null }
}

function App() {
  const [opportunities, setOpportunities] = useState([])
  const [selectedId, setSelectedId] = useState(() => getRouteFromPath().opportunityId)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [route, setRoute] = useState(getRouteFromPath)
  const [notice, setNotice] = useState(null)
  const { page } = route

  useEffect(() => {
    function syncRouteWithPath() {
      const nextRoute = getRouteFromPath()
      setRoute(nextRoute)
      if (nextRoute.opportunityId) setSelectedId(nextRoute.opportunityId)
    }

    window.addEventListener('popstate', syncRouteWithPath)
    return () => window.removeEventListener('popstate', syncRouteWithPath)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page, route.opportunityId])

  const loadOpportunities = useCallback(async () => {
    setLoading(true)
    try {
      const items = await getOpportunities()
      setOpportunities(items)
      setSelectedId((currentId) => (
        currentId && items.some((item) => item.id === currentId)
          ? currentId
          : items[0]?.id ?? null
      ))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let active = true

    getOpportunities()
      .then((items) => {
        if (!active) return
        setOpportunities(items)
        setSelectedId((currentId) => (
          currentId && items.some((item) => item.id === currentId)
            ? currentId
            : items[0]?.id ?? null
        ))
      })
      .catch((error) => {
        if (active) setNotice({ type: 'error', text: error.message })
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const filteredOpportunities = useMemo(() => {
    const query = search.trim().toLowerCase()
    return opportunities.filter((opportunity) => {
      const matchesStatus = statusFilter === 'All' || opportunity.status === statusFilter
      const searchable = [
        opportunity.title,
        opportunity.researchArea,
        opportunity.facultyName,
        opportunity.department,
        ...opportunity.requiredSkills,
      ].join(' ').toLowerCase()
      return matchesStatus && (!query || searchable.includes(query))
    })
  }, [opportunities, search, statusFilter])

  const selectedOpportunityId = route.opportunityId ?? selectedId
  const selectedOpportunity = opportunities.find((item) => item.id === selectedOpportunityId) ?? null
  const editingOpportunity = opportunities.find((item) => item.id === editingId) ?? null
  const openCount = opportunities.filter((item) => item.status === 'Open').length
  const closedCount = opportunities.length - openCount

  function navigate(path) {
    window.history.pushState(null, '', path)
    const nextRoute = getRouteFromPath()
    setRoute(nextRoute)
    if (nextRoute.opportunityId) setSelectedId(nextRoute.opportunityId)
  }

  function startNewOpportunity() {
    setEditingId(null)
    setNotice(null)
  }

  function startEditing(opportunity) {
    setEditingId(opportunity.id)
    setNotice(null)
    navigate('/add')
  }

  function addOpportunity() {
    startNewOpportunity()
    navigate('/add')
  }

  function viewOpportunity(id) {
    setSelectedId(id)
    navigate(`/opportunity/${encodeURIComponent(id)}`)
  }

  function closeForm() {
    navigate(editingId ? `/opportunity/${encodeURIComponent(editingId)}` : '/home')
    setEditingId(null)
  }

  async function saveOpportunity(payload) {
    setSaving(true)
    setNotice(null)
    const isEditing = Boolean(editingId)

    try {
      const saved = isEditing
        ? await updateOpportunity(editingId, payload)
        : await createOpportunity(payload)
      await loadOpportunities()
      setSelectedId(saved.id)
      setEditingId(null)
      navigate(isEditing ? `/opportunity/${encodeURIComponent(saved.id)}` : '/browse')
      setNotice({
        type: 'success',
        text: isEditing ? 'Research opportunity updated.' : 'Research opportunity created.',
      })
    } catch (error) {
      setNotice({ type: 'error', text: error.message })
    } finally {
      setSaving(false)
    }
  }

  async function changeStatus(opportunity) {
    const status = opportunity.status === 'Open' ? 'Closed' : 'Open'
    setNotice(null)
    try {
      const updated = await updateOpportunity(opportunity.id, { status })
      setOpportunities((current) => current.map((item) => (
        item.id === updated.id ? updated : item
      )))
      setNotice({ type: 'success', text: `Opportunity marked ${updated.status.toLowerCase()}.` })
    } catch (error) {
      setNotice({ type: 'error', text: error.message })
    }
  }

  async function removeOpportunity(opportunity) {
    if (!window.confirm(`Delete "${opportunity.title}"? This cannot be undone.`)) return

    setNotice(null)
    try {
      await deleteOpportunity(opportunity.id)
      await loadOpportunities()
      navigate('/browse')
      setNotice({ type: 'success', text: 'Research opportunity deleted.' })
    } catch (error) {
      setNotice({ type: 'error', text: error.message })
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800">
      <SiteHeader currentPage={page} onNavigate={navigate} />
      <main id="home" className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8">
        <NoticeBanner notice={notice} />

        {page === 'home' && (
          <HeroBanner
            totalCount={opportunities.length}
            openCount={openCount}
            closedCount={closedCount}
            onNavigate={navigate}
          />
        )}

        {page === 'browse' && (
          <>
            <OpportunityList
              opportunities={filteredOpportunities}
              totalCount={opportunities.length}
              loading={loading}
              selectedId={selectedId}
              search={search}
              statusFilter={statusFilter}
              onSearchChange={setSearch}
              onStatusChange={setStatusFilter}
              onSelect={viewOpportunity}
              onCreate={addOpportunity}
            />
          </>
        )}

        {page === 'detail' && selectedOpportunity && (
          <OpportunityDetails
            opportunity={selectedOpportunity}
            onBack={() => navigate('/browse')}
            onEdit={() => startEditing(selectedOpportunity)}
            onToggleStatus={() => changeStatus(selectedOpportunity)}
            onDelete={() => removeOpportunity(selectedOpportunity)}
          />
        )}

        {page === 'detail' && !selectedOpportunity && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h1 className="text-xl font-bold text-slate-950">Opportunity not found</h1>
            <p className="mt-2 text-sm text-slate-500">It may have been deleted or is no longer available.</p>
            <a
              href="/browse"
              onClick={(event) => {
                event.preventDefault()
                navigate('/browse')
              }}
              className="mt-5 inline-flex text-sm font-bold text-indigo-700 hover:text-indigo-900"
            >
              Back to opportunities
            </a>
          </section>
        )}

        {page === 'notFound' && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">404</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-950">Page not found</h1>
            <p className="mt-2 text-sm text-slate-500">The page you requested does not exist.</p>
            <a
              href="/home"
              onClick={(event) => {
                event.preventDefault()
                navigate('/home')
              }}
              className="mt-5 inline-flex text-sm font-bold text-indigo-700 hover:text-indigo-900"
            >
              Go to home
            </a>
          </section>
        )}

        {page === 'add' && (
          <OpportunityForm
            key={editingId ?? 'new'}
            opportunity={editingOpportunity}
            saving={saving}
            onSubmit={saveOpportunity}
            onClose={closeForm}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
