import { Sueldo } from "../../classes/Sueldo";

class SueldosService {
  private instancia: Sueldo | null = null;

  loadSueldos(arr: number[]): void {
    this.instancia = new Sueldo(arr);
  }

  getValores(): number[] {
    if (!this.instancia) throw new Error("No se han cargado sueldos aún.");
    return this.instancia.getAll();
  }

  getLineas(): string[] {
    if (!this.instancia) throw new Error("No se han cargado sueldos aún.");
    return this.instancia.imprimir();
  }
}

export const sueldosService = new SueldosService();
