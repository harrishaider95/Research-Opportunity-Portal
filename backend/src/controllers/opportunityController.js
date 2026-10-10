
import mongoose from 'mongoose'
import { validateOpportunityInput } from '../validators/opportunityValidator.js'

function sendError(res, statusCode, error, details) {
  return res.status(statusCode).json({
    statusCode,
    error,
    ...(details ? { details } : {}),
  })
}

export function createOpportunityController(Opportunity) {
  return {
    async list(req, res) {
      try {
        const opportunities = await Opportunity.find().sort({ createdAt: -1 })
        res.json(opportunities)
      } catch (error) {
        sendError(res, 500, error.message)
      }
    },

    async getById(req, res) {
      try {
        if (!mongoose.isValidObjectId(req.params.id)) {
          return sendError(res, 400, 'Invalid opportunity ID')
        }

        const opportunity = await Opportunity.findById(req.params.id)

        if (!opportunity) {
          return sendError(res, 404, 'Opportunity not found')
        }

        res.json(opportunity)
      } catch (error) {
        sendError(res, 500, error.message)
      }
    },

    async create(req, res) {
      try {
        const opportunity = await Opportunity.create(req.body)
        res.status(201).json(opportunity)
      } catch (error) {
        sendError(res, 400, error.message)
      }
    },

    async update(req, res) {
      try {
        if (!mongoose.isValidObjectId(req.params.id)) {
          return sendError(res, 400, 'Invalid opportunity ID')
        }

        const opportunity = await Opportunity.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        )

        if (!opportunity) {
          return sendError(res, 404, 'Opportunity not found')
        }

        res.json(opportunity)
      } catch (error) {
        sendError(res, 400, error.message)
      }
    },

    async patch(req, res) {
      try {
        if (!mongoose.isValidObjectId(req.params.id)) {
          return sendError(res, 400, 'Invalid opportunity ID')
        }

        const { errors, values } = validateOpportunityInput(req.body, { partial: true })
        if (errors.length > 0) {
          return sendError(res, 400, 'Invalid opportunity data', errors)
        }

        const opportunity = await Opportunity.findByIdAndUpdate(
          req.params.id,
          { $set: values },
          { new: true, runValidators: true },
        )

        if (!opportunity) {
          return sendError(res, 404, 'Opportunity not found')
        }

        res.json(opportunity)
      } catch (error) {
        sendError(res, 500, error.message)
      }
    },

    async remove(req, res) {
      try {
        if (!mongoose.isValidObjectId(req.params.id)) {
          return sendError(res, 400, 'Invalid opportunity ID')
        }

        const opportunity = await Opportunity.findByIdAndDelete(req.params.id)

        if (!opportunity) {
          return sendError(res, 404, 'Opportunity not found')
        }

        res.json({ message: 'Opportunity deleted successfully' })
      } catch (error) {
        sendError(res, 500, error.message)
      }
    },
  }
}
