export class Sueldo {
  private sueldos: number[];

  constructor(sueldos: number[]) {
    if (sueldos.length !== 5) {
      throw new Error("Debe ingresar exactamente 5 sueldos");
    }
    this.sueldos = sueldos;
  }

  imprimir(): string[] {
    return this.sueldos.map(
      (sueldo, idx) => `Operario ${idx + 1}: $${sueldo.toFixed(2)}`
    );
  }

  getAll(): number[] {
    return this.sueldos;
  }
}
