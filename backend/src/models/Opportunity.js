import mongoose from 'mongoose'

const opportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    researchArea: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    facultyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    department: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    
    requiredSkills: {
      type: [{
        type: String,
        trim: true,
      }],
      required: true,
      validate: {
        validator: (skills) => skills.length > 0 && skills.every((skill) => skill.length > 0),
        message: 'At least one non-empty skill is required.',
      },
    },
    availablePositions: {
      type: Number,
      required: true,
      min: 1,
      max: 2147483647,
      validate: {
        validator: Number.isInteger,
        message: 'Available positions must be a whole number.',
      },
    },
    applicationDeadline: {
      type: String,
      required: true,
      match: /^\d{4}-\d{2}-\d{2}$/,
    },
    status: {
      type: String,
      enum: ['Open', 'Closed'],
      default: 'Open',
      required: true,
    },
  },
  {
    collection: 'research_opportunities',
    timestamps: true,
    versionKey: false,
  },
)

opportunitySchema.index({ status: 1, applicationDeadline: 1 }, { name: 'status_deadline' })
opportunitySchema.index({ createdAt: -1 }, { name: 'created_at_desc' })

const Opportunity = mongoose.models.Opportunity
  || mongoose.model('Opportunity', opportunitySchema)

export default Opportunity
