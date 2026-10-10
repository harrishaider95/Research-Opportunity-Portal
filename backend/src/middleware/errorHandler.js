export function errorHandler(error, _request, response, _next) {
  if (error instanceof SyntaxError && 'body' in error) {
    return response.status(400).json({
      statusCode: 400,
      error: 'Request body must contain valid JSON.',
    })
  }

  console.error('API request failed:', error)
  response.status(500).json({
    statusCode: 500,
    error: 'An unexpected server error occurred.',
  })
}
