import { Router } from 'express'
import auth from './auth/auth.route'
import users from './users/user.route'
import lead from './project/project.route'
// import { authenticated, checkWorkspace } from './utils/middleware'

const rootRouter = Router()
rootRouter.use('/auth', auth)
rootRouter.use('/users', users)
rootRouter.use('/leads', lead)

export default rootRouter
