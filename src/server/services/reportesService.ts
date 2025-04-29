import { QueryTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class ReportesService {
  async empleadosOrdenDesc(): Promise<{ nombres: string }[]> {
    return sequelize.query(
      `SELECT nombres FROM Empleados ORDER BY nombres DESC;`,
      { type: QueryTypes.SELECT }
    );
  }

  async empleadosSoporte(): Promise<{ nombre: string; puesto: string; localidad: string }[]> {
    return sequelize.query(
      `SELECT e.nombres AS nombre,
              p.puestos AS puesto,
              l.localidad AS localidad
       FROM Empleados e
       JOIN Puestos p ON e.puesto_id = p.id
       JOIN Departamentos d ON e.departamento_id = d.id
       JOIN Localidades l ON d.localidad_id = l.id
       WHERE p.puestos = 'Soporte';`,
      { type: QueryTypes.SELECT }
    );
  }

  async empleadosTerminanConO(): Promise<{ nombres: string }[]> {
    return sequelize.query(
      `SELECT nombres FROM Empleados WHERE nombres LIKE '%o';`,
      { type: QueryTypes.SELECT }
    );
  }

  async empleadosCarlosPaz(): Promise<{ nombre: string; puesto: string; sueldo: number }[]> {
    return sequelize.query(
      `SELECT e.nombres AS nombre,
              p.puestos AS puesto,
              e.sueldo AS sueldo
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       JOIN Localidades l ON d.localidad_id = l.id
       JOIN Puestos p ON e.puesto_id = p.id
       WHERE l.localidad = 'Carlos Paz';`,
      { type: QueryTypes.SELECT }
    );
  }

  async empleadosSueldoEntre(): Promise<{ nombre: string; sueldo: number; localidad: string }[]> {
    return sequelize.query(
      `SELECT e.nombres AS nombre,
              e.sueldo AS sueldo,
              l.localidad AS localidad
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       JOIN Localidades l ON d.localidad_id = l.id
       WHERE e.sueldo BETWEEN 10000 AND 13000;`,
      { type: QueryTypes.SELECT }
    );
  }

  async departamentosConMasDeCinco(): Promise<{ departamento: string; total_empleados: number }[]> {
    return sequelize.query(
      `SELECT d.denominacion AS departamento,
              COUNT(e.id) AS total_empleados
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       GROUP BY d.denominacion
       HAVING COUNT(e.id) > 5;`,
      { type: QueryTypes.SELECT }
    );
  }

  async empleadosCordobaAnalistaProg(): Promise<{ nombre_completo: string }[]> {
    return sequelize.query(
      `SELECT CONCAT(e.nombres, ' ', e.apellido) AS nombre_completo
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       JOIN Localidades l ON d.localidad_id = l.id
       JOIN Puestos p ON e.puesto_id = p.id
       WHERE l.localidad = 'Córdoba'
         AND p.puestos IN ('Analista', 'Programador');`,
      { type: QueryTypes.SELECT }
    );
  }

  async sueldoMedio(): Promise<{ sueldo_medio: number }[]> {
    return sequelize.query(
      `SELECT AVG(e.sueldo) AS sueldo_medio FROM Empleados e;`,
      { type: QueryTypes.SELECT }
    );
  }

  async sueldoMaxDept10(): Promise<{ departamento: string; sueldo_maximo: number }[]> {
    return sequelize.query(
      `SELECT d.denominacion AS departamento,
              MAX(e.sueldo) AS sueldo_maximo
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       WHERE d.id = 10
       GROUP BY d.denominacion;`,
      { type: QueryTypes.SELECT }
    );
  }

  async sueldoMinSoporte(): Promise<{ departamento: string; sueldo_minimo: number }[]> {
    return sequelize.query(
      `SELECT d.denominacion AS departamento,
              MIN(e.sueldo) AS sueldo_minimo
       FROM Empleados e
       JOIN Departamentos d ON e.departamento_id = d.id
       WHERE d.denominacion = 'Soporte'
       GROUP BY d.denominacion;`,
      { type: QueryTypes.SELECT }
    );
  }

  async sumaSueldosPorPuesto(): Promise<{ puesto: string; suma_sueldos: number }[]> {
    return sequelize.query(
      `SELECT p.puestos AS puesto,
              SUM(e.sueldo) AS suma_sueldos
       FROM Empleados e
       JOIN Puestos p ON e.puesto_id = p.id
       GROUP BY p.puestos;`,
      { type: QueryTypes.SELECT }
    );
  }
}

export const reportesService = new ReportesService();
