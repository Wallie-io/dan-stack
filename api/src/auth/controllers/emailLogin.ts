import { NextFunction, Request, Response } from 'express'
import { User } from '../../users/user.model'
import { comparePasswords } from '../../users/user.helper'

export const emailLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      throw new Error("Credentials don't match.")
    }

    await comparePasswords(password, user.password)

    req.session.user = user

    res.cookie('session', user._id)
    res.send('ok')
  } catch (err) {
    next(err)
  }
}
