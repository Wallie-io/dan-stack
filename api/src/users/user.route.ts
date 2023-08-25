import express from 'express'
import { multer } from '../utils/multer'
import { authenticated } from '../middleware/authenticated'
import { whoIsMe } from './controllers/whoIsMe'
import { uploadUserAvatar } from './controllers/uploadUserAvatar'

export const router = express.Router()

router.get('/me', [authenticated], whoIsMe)
router.post('/upload', [authenticated, multer.single('file')], uploadUserAvatar)

export default router
