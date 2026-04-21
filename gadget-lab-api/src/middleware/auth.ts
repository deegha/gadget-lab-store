import { Request, Response, NextFunction } from 'express'
import { AppError } from './errorHandler'

// Placeholder — full implementation in Step 3
export interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
    role: 'CUSTOMER' | 'ADMIN'
  }
}

export function requireAdmin(req: AuthRequest, _res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'ADMIN') {
    return next(new AppError(401, 'Unauthorized'))
  }
  next()
}
