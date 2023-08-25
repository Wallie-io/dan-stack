import { Request, Response, NextFunction } from 'express'

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session) {
      await new Promise((resolve) => req.session.destroy(() => resolve(null)))
    }

    res.clearCookie('connect.sid', { path: '/' })
    res.clearCookie('session')

    res.status(200).end()
  } catch (err) {
    next(err)
  }
}
