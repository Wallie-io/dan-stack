import { ObjectId } from 'mongoose'

export { mongoConnection } from './mongoConnection'

export type ID = ObjectId | string
