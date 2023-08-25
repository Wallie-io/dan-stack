import { ObjectId } from 'mongoose'

/**
 * Converts lean mongoose documents to client-friendly types by
 * turning all ObjectID keys into string keys.
 */
export type ServerToClientConversion<Document> =
  // If `Document` is an ObjectId, replace it with a string
  Document extends ObjectId
    ? string
    : // If `Document` is an object, recursively map over its properties and apply `ServerToClientConversion` to each
    Document extends object
    ? { [Key in keyof Document]: ServerToClientConversion<Document[Key]> }
    : // If `Document` is neither an ObjectId nor an object, leave it unchanged
      Document
