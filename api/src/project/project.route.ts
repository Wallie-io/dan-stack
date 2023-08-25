import express from 'express'
import { leadAuth, leadCallBack } from './project.controller'

export const router = express.Router()

router.get('/projects', leadAuth)
router.get('/projects/:id', leadCallBack)

export default router
