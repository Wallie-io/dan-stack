import { NextFunction, Request, Response } from 'express'
import { upload } from '../../utils/storage'
import { User } from '../user.model'

export const uploadUserAvatar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = await upload(req.file, `user-avatars/${req.user._id}`)

    await User.findByIdAndUpdate(req.user._id, { avatar: url })

    res.json({ url })
  } catch (err) {
    next(err)
  }
}
