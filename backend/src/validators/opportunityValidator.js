const allowedFields = new Set([
  'title',
  'description',
  'researchArea',
  'facultyName',
  'department',
  'requiredSkills',
  'availablePositions',
  'applicationDeadline',
  'status',
])

const textFields = {
  title: { maximumLength: 200 },
  description: {},
  researchArea: { maximumLength: 120 },
  facultyName: { maximumLength: 120 },
  department: { maximumLength: 120 },
}

function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false
  }

  const date = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export function validateOpportunityInput(body, { partial = false } = {}) {
  const errors = []
  const values = {}

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { errors: ['Request body must be a JSON object.'], values }
  }

  const providedFields = Object.keys(body)
  const unknownFields = providedFields.filter((field) => !allowedFields.has(field))

  if (unknownFields.length > 0) {
    errors.push(`Unknown field(s): ${unknownFields.join(', ')}.`)
  }

  if (partial && providedFields.length === 0) {
    errors.push('Provide at least one field to update.')
  }

  for (const [field, config] of Object.entries(textFields)) {
    if (!(field in body)) {
      if (!partial) errors.push(`${field} is required.`)
      continue
    }

    if (typeof body[field] !== 'string' || body[field].trim().length === 0) {
      errors.push(`${field} must be a non-empty string.`)
      continue
    }

    const value = body[field].trim()
    if (config.maximumLength && value.length > config.maximumLength) {
      errors.push(`${field} must be ${config.maximumLength} characters or fewer.`)
      continue
    }

    values[field] = value
  }

  if ('requiredSkills' in body) {
    const skills = body.requiredSkills
    if (!Array.isArray(skills) || skills.length === 0) {
      errors.push('requiredSkills must be a non-empty array of strings.')
    } else if (skills.some((skill) => typeof skill !== 'string' || skill.trim().length === 0)) {
      errors.push('requiredSkills must contain only non-empty strings.')
    } else {
      values.requiredSkills = [...new Set(skills.map((skill) => skill.trim()))]
    }
  } else if (!partial) {
    errors.push('requiredSkills is required.')
  }

  if ('availablePositions' in body) {
    if (!Number.isInteger(body.availablePositions) || body.availablePositions < 1 || body.availablePositions > 2147483647) {
      errors.push('availablePositions must be a positive 32-bit integer.')
    } else {
      values.availablePositions = body.availablePositions
    }
  } else if (!partial) {
    errors.push('availablePositions is required.')
  }

  if ('applicationDeadline' in body) {
    if (typeof body.applicationDeadline !== 'string' || !isValidDate(body.applicationDeadline)) {
      errors.push('applicationDeadline must be a valid date in YYYY-MM-DD format.')
    } else {
      values.applicationDeadline = body.applicationDeadline
    }
  } else if (!partial) {
    errors.push('applicationDeadline is required.')
  }

  if ('status' in body) {
    if (!['Open', 'Closed'].includes(body.status)) {
      errors.push('status must be either Open or Closed.')
    } else {
      values.status = body.status
    }
  } else if (!partial) {
    values.status = 'Open'
  }

  return { errors, values }
}
