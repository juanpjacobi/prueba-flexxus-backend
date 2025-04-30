import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "CAMBIA_ESTE_SECRETO";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    const user = { id: 1, username };
    const token = jwt.sign({ user }, SECRET, { expiresIn: "1h" });
    res.json({ token, user });
  }
  res.status(401).json({ message: "Credenciales inválidas" });
};
