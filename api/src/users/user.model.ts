import { Schema, model, Document, CallbackWithoutResultAndOptionalError } from 'mongoose'
import bcrypt from 'bcrypt'
import { identify } from '../utils/analytics'
import { ID } from '../utils'

export interface UserType {
  _id: ID
  displayName: string
  email: string
  password: string
  avatar: string
}

interface InstanceMethods {
  isValidPassword: (password: string) => Promise<boolean>
}

export const UserSchema = new Schema<UserType, {}, InstanceMethods>(
  {
    displayName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: String,
    avatar: String
  },
  { timestamps: { createdAt: true, updatedAt: true } }
)

const handleDocumentChanges = (
  doc: Document<ID, any, UserType>,
  next: CallbackWithoutResultAndOptionalError
) => {
  // console.log(doc, next)
  // identify(doc._id, doc?.toObject())
  next()
}

UserSchema.post('save', handleDocumentChanges)
UserSchema.post('update', handleDocumentChanges)
UserSchema.post('updateOne', handleDocumentChanges)
UserSchema.post('updateMany', handleDocumentChanges)
UserSchema.post('findOneAndUpdate', handleDocumentChanges)

UserSchema.method('isValidPassword', async function (password: string) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)

  return compare
})

export const User = model<UserType>('User', UserSchema)
