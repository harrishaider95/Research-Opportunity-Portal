import cors from 'cors'
import express from 'express'
import { errorHandler } from './middleware/errorHandler.js'
import { createOpportunityRouter } from './routes/opportunityRoutes.js'

export function createApp(Opportunity) {
  const app = express()
  const allowedOrigins = [
    process.env.CORS_ORIGIN,
    'http://localhost:5173',
  ].filter(Boolean)

  app.use(cors({ origin: allowedOrigins }))
  app.use(express.json({ limit: '32kb' }))

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok' })
  })

  app.use('/api/opportunities', createOpportunityRouter(Opportunity))
  app.use((_request, response) => {
    response.status(404).json({
      statusCode: 404,
      error: 'Page not found',
    })
  })
  app.use(errorHandler)

  return app
}
