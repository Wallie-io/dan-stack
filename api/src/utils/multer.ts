import Multer from 'multer'

export const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024 // no larger than 5mb, can change later
  }
})
