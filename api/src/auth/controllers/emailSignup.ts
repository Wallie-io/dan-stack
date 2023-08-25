import { NextFunction, Request, Response } from 'express'
import { User } from '../../users/user.model'
import bcrypt from 'bcrypt'

export const emailSignup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { displayName, email, password } = req.body
    const exists = await User.exists({ email })

    if (exists) {
      throw new Error('Email already exists.')
    }

    const user = await User.create({
      email,
      displayName,
      password: await bcrypt.hash(password, 10)
    })

    req.session.user = user

    res.cookie('session', user._id)
    res.send('ok')
  } catch (err) {
    next(err)
  }
}
