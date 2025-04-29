export class Alumno {
    constructor(
      public nombre: string,
      public edad: number
    ) {
      if (!nombre.trim()) {
        throw new Error("El nombre no puede estar vacío");
      }
      if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
      }
    }
  
    imprimirDatos(): string {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  
    imprimirMayorEdad(): string {
      return this.edad >= 18
        ? `${this.nombre} es mayor de edad.`
        : `${this.nombre} no es mayor de edad.`;
    }
  }
  