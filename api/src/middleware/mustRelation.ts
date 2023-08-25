import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

export const mustRelation = (model: string) => {
  const middleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const itemId = req.params.id || req.body.id

      if (!itemId) {
        throw new Error('Failed to find item ID.')
      }

      const joined = await mongoose.model(model).exists({ members: req.user._id, _id: itemId })

      if (!joined) {
        return res.status(401).send('')
      }

      return next()
    } catch (err) {
      next(err)
    }
  }

  return middleware
}
