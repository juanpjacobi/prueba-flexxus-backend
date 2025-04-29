import { Alumno } from "../../classes/Alumno";

class AlumnosService {
  private alumnos: Alumno[] = [];

  createAlumno(nombre: string, edad: number): void {
    const a = new Alumno(nombre, edad);
    this.alumnos.push(a);
  }

  getDatos(): string[] {
    return this.alumnos.map(a => a.imprimirDatos());
  }

  getMayorEdadMsgs(): string[] {
    return this.alumnos.map(a => a.imprimirMayorEdad());
  }
}

export const alumnosService = new AlumnosService();
