import { Request, Response, NextFunction } from 'express'
import { User } from '../user.model'

export const whoIsMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.user._id)

    res.json(user)
  } catch (err) {
    next(err)
  }
}
