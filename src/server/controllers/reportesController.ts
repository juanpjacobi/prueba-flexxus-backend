import { Request, Response } from "express";
import { reportesService } from "../services/reportesService";

export const getEmpleadosOrdenDesc = async (_req: Request, res: Response) => {
  const data = await reportesService.empleadosOrdenDesc();
  res.json(data);
};

export const getEmpleadosSoporte = async (_req: Request, res: Response) => {
  const data = await reportesService.empleadosSoporte();
  res.json(data);
};

export const getEmpleadosTerminanConO = async (
  _req: Request,
  res: Response
) => {
  const data = await reportesService.empleadosTerminanConO();
  res.json(data);
};

export const getEmpleadosCarlosPaz = async (_req: Request, res: Response) => {
  const data = await reportesService.empleadosCarlosPaz();
  res.json(data);
};

export const getEmpleadosSueldoEntre = async (_req: Request, res: Response) => {
  const data = await reportesService.empleadosSueldoEntre();
  res.json(data);
};

export const getDepartamentosConMasDeCinco = async (
  _req: Request,
  res: Response
) => {
  const data = await reportesService.departamentosConMasDeCinco();
  res.json(data);
};

export const getEmpleadosCordobaAnalistaProg = async (
  _req: Request,
  res: Response
) => {
  const data = await reportesService.empleadosCordobaAnalistaProg();
  res.json(data);
};

export const getSueldoMedio = async (_req: Request, res: Response) => {
  const data = await reportesService.sueldoMedio();
  res.json(data);
};

export const getSueldoMaxDept10 = async (_req: Request, res: Response) => {
  const data = await reportesService.sueldoMaxDept10();
  res.json(data);
};

export const getSueldoMinSoporte = async (_req: Request, res: Response) => {
  const data = await reportesService.sueldoMinSoporte();
  res.json(data);
};

export const getSumaSueldosPorPuesto = async (_req: Request, res: Response) => {
  const data = await reportesService.sumaSueldosPorPuesto();
  res.json(data);
};
