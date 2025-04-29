import { Request, Response } from "express";

export const getOddNumbers = (_req: Request, res: Response) => {
  const oddNumbers: number[] = [];
  for (let i = 1; i <= 100; i += 2) {
    oddNumbers.push(i);
  }
  res.json({ oddNumbers });
};
