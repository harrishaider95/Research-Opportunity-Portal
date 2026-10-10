import { Router } from 'express'
import { createOpportunityController } from '../controllers/opportunityController.js'

export function createOpportunityRouter(Opportunity) {
  const router = Router()
  const controller = createOpportunityController(Opportunity)

  router.get('/', controller.list)
  router.get('/:id', controller.getById)
  router.post('/', controller.create)
  router.patch('/:id', controller.patch)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.remove)

  return router
}
