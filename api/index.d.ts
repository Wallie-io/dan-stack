import { UserType } from './src/users/user.model'

// Context
declare global {
  namespace Express {
    interface Request {
      user: UserType
      workspace: string
    }
  }
}

// Session Update
declare module 'express-session' {
  interface SessionData {
    user: UserType
  }
}
