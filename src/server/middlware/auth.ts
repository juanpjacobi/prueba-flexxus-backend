import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || "CAMBIA_ESTE_SECRETO";

export interface AuthRequest extends Request {
  user?: { id: number; username: string };
}

export function authenticateToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];  // Bearer <token>
  if (!token) {
    res.status(401).json({ message: 'Token requerido' });
    return;
  } 

  jwt.verify(token, SECRET, (err, payload) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = (payload as any).user;
    next();
  });
}
