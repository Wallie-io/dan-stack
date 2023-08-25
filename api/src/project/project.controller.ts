import { Request, Response, NextFunction } from 'express'

export const leadAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    next(err)
  }
}

export const leadCallBack = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    throw err
    next(err)
  }
}
