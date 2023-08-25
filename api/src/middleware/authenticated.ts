import { Request, Response, NextFunction } from 'express'

export const authenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).send('Must be logged in.')
  }

  return next()
}
