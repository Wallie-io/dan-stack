import { Schema, model, Document, ObjectId } from 'mongoose'
import { ServerToClientConversion } from '../utils/serverToClientConversion'

/**
 * The expected type to be returned from Mongoose after running `.lean()`.
 * This should be the only type we use in our business logic.
 */
export interface ProjectLean {
  _id: ObjectId
  brand: ObjectId
  client: ObjectId
  contract: ObjectId // @todo - this needs to be migrated
  invoice: ObjectId // @todo - this needs to be migrated
  title: string
}

/**
 * For frontend use only!
 * This is a lean type with all ObjectIds recursively converted to strings.
 */
export type ProjectFE = ServerToClientConversion<ProjectLean>

/**
 * For internal use only!
 * We only use this type to build the model's schema type. We don't
 * expect to be using this since we are running `.lean()` on all queries.
 */
interface ProjectDocument extends Omit<Document, '_id'>, ProjectLean {}

export const ProjectSchema = new Schema<ProjectDocument>(
  {
    _id: { type: Schema.Types.ObjectId, default: Schema.Types.ObjectId, auto: true },
    brand: { type: Schema.Types.ObjectId, required: true, ref: 'Brand' },
    client: { type: Schema.Types.ObjectId, required: true, ref: 'Client' },
    contract: { type: Schema.Types.ObjectId, required: true, ref: 'Contract' }, // @todo - same, needs to be migrated
    invoice: { type: Schema.Types.ObjectId, required: true, ref: 'Invoice' },
    title: { type: String, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
)

export const Project = model<ProjectDocument>('Project', ProjectSchema)

/***
 * 
 *  jake's WIP from 3:12 PM May 2nd 2023
 * 
 * 
let JobSchema = new Schema(
  {
    phone: {
      type: String
    },
    email: {
      type: String
    },
    start: {
      type: Date
    },
    end: {
      type: Date
    },
    allDay: {
      type: Boolean
    },
    transparency: {
      type: String
    },
    potential: Boolean,
    status: {
      type: Schema.Types.ObjectId,
      ref: 'LeadStatus'
    },
    archived: {
      type: Boolean,
      default: false
    },
    contactName: String,
    address: {
      name: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      zip: String,
      country: String
    },
    mappedFields: Schema.Types.Mixed,
    notes: [
      {
        body: {
          type: String
        }
      }
    ],
    source: String,
    acceptPayment: {
      override: Boolean,
      cc: Boolean,
      ach: Boolean,
      paypal: Boolean
    },
    invoiceOptions: {
      override: Boolean,
      showCompany: {
        type: Boolean,
        default: false
      },
      showClient: {
        type: Boolean,
        default: false
      },
      showBoth: {
        type: Boolean,
        default: false
      }
    },
    phoneLogs: [
      {
        date: Date,
        body: {
          type: String
        }
      }
    ],
    receiveTip: Boolean,
    imported: Boolean,
    approve: {
      type: Boolean,
      default: false
    },
    leadSource: {
      type: Schema.Types.ObjectId,
      ref: 'LeadSource'
    },
    isClosed: Boolean
  },
  options
)

 */
