import { Storage } from '@google-cloud/storage'
import path from 'path'

const storage = new Storage({ keyFilename: process.env.GCP_KEY_FILE })

export const bucket = storage.bucket(process.env.BUCKET_NAME)

export const upload = async (file: Express.Multer.File | null, fileName: string) => {
  if (!file) {
    throw new Error('Please upload a file.')
  }

  // create blob
  const ext = path.extname(file.originalname)
  const blob = bucket.file(`${fileName}${ext}`)
  const blobStream = blob.createWriteStream({
    resumable: false
  })

  blobStream.on('error', (err) => {
    throw new Error(err.message)
  })

  // wait for file to fully upload
  const fileUploaded = new Promise((resolve) => blobStream.on('finish', (data) => resolve(data)))

  blobStream.end(file.buffer)
  await fileUploaded

  // this is a future me problem
  const [url] = await blob.getSignedUrl({
    action: 'read',
    expires: '03-25-2300'
  })

  return url
}
