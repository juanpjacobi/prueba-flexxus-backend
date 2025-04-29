import { Router } from "express";
import {
  getEmpleadosOrdenDesc,
  getEmpleadosSoporte,
  getEmpleadosTerminanConO,
  getEmpleadosCarlosPaz,
  getEmpleadosSueldoEntre,
  getDepartamentosConMasDeCinco,
  getEmpleadosCordobaAnalistaProg,
  getSueldoMedio,
  getSueldoMaxDept10,
  getSueldoMinSoporte,
  getSumaSueldosPorPuesto,
} from "../controllers/reportesController";

const router = Router();

router.get("/empleados/orden-desc", getEmpleadosOrdenDesc);
router.get("/empleados/soporte", getEmpleadosSoporte);
router.get("/empleados/terminan-con-o", getEmpleadosTerminanConO);
router.get("/empleados/carlos-paz", getEmpleadosCarlosPaz);
router.get("/empleados/sueldo-entre", getEmpleadosSueldoEntre);
router.get("/departamentos/mas-de-5", getDepartamentosConMasDeCinco);
router.get("/empleados/cordoba-analista-prog", getEmpleadosCordobaAnalistaProg);
router.get("/sueldo/medio", getSueldoMedio);
router.get("/sueldo/max-dept-10", getSueldoMaxDept10);
router.get("/sueldo/min-soporte", getSueldoMinSoporte);
router.get("/suma-sueldos/por-puesto", getSumaSueldosPorPuesto);

export default router;
