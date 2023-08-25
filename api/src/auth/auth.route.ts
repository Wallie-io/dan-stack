import express from 'express'
import { authenticated } from '../middleware/authenticated'
import { emailLogin } from './controllers/emailLogin'
import { logout } from './controllers/logout'
import { emailSignup } from './controllers/emailSignup'

export const router = express.Router()

router.post('/login', emailLogin)
router.post('/signup', emailSignup)
router.post('/logout', [authenticated], logout)

export default router
