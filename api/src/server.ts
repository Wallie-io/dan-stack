import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import rootRouter from './routes'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import MongoStore from 'connect-mongo'
import { mongoConnection } from './utils'
import { grabUserData } from './middleware/grabUserData'

const mongoClient = mongoConnection()

const app = express()

const COOKIE_MAX_AGE = 8_640_000_000 // 100 days
const morganOption = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
// app.use(helmet()); // <-- security (use later)
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(
  expressSession({
    secret: 'super secret secret that needs to be changed',
    unset: 'destroy',
    cookie: { secure: false, maxAge: COOKIE_MAX_AGE, domain: 'localhost' }, // <-- change secure in production
    store: MongoStore.create({
      clientPromise: mongoClient,
      stringify: false,
      autoRemove: 'interval',
      autoRemoveInterval: 1
    }),
    resave: false,
    rolling: true,
    saveUninitialized: false
  })
)

app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.cookie || !req.user) {
    return next()
  }

  const expiry = req.session?.cookie.expires
  res.cookie('session', req.user._id.toString(), {
    domain: 'localhost',
    expires: expiry,
    httpOnly: false
  })

  next()
})

app.use(grabUserData)

app.use('/api', rootRouter)

app.use((error, _req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(error?.response?.status || 500).json({ message: error.message })
  } else {
    console.log('[ERROR]: ', error)
    res.status(error?.response?.status || 500).json({ message: error.message, error })
  }
})

export default app
