const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:4000/api').replace(/\/+$/, '')

async function request(path, options = {}) {
  let response
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers,
      },
    })
  } catch {
    throw new Error('Cannot reach the API. Check that the backend is running and try again.')
  }

  let payload
  try {
    payload = await response.json()
  } catch {
    throw new Error('The API returned an invalid response.')
  }

  if (!response.ok) {
    const details = Array.isArray(payload.details) ? ` ${payload.details.join(' ')}` : ''
    throw new Error(`${payload.error || 'The request failed.'}${details}`)
  }

  return payload
}

function normalizeOpportunity(opportunity) {
  return { ...opportunity, id: opportunity.id ?? opportunity._id }
}

export function getOpportunities() {
  return request('/opportunities').then((opportunities) => opportunities.map(normalizeOpportunity))
}

export function createOpportunity(opportunity) {
  return request('/opportunities', {
    method: 'POST',
    body: JSON.stringify(opportunity),
  }).then(normalizeOpportunity)
}

export function updateOpportunity(id, changes) {
  return request(`/opportunities/${encodeURIComponent(id)}`, {
    method: 'PUT',
    body: JSON.stringify(changes),
  }).then(normalizeOpportunity)
}

export function deleteOpportunity(id) {
  return request(`/opportunities/${encodeURIComponent(id)}`, { method: 'DELETE' })
}
