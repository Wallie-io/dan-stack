import { connect, Types } from 'mongoose'

export const OID = (id?: string) => new Types.ObjectId(id)

export const mongoConnection = async () => {
  const client = await connect(process.env.MONGO_URI as string)
  console.log('Connected to Mongo')
  return client.connection.getClient()
}
