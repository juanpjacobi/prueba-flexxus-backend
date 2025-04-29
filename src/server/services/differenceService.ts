export class DifferenceService {

    getDifference<T>(x: T[], y: T[]): { x: T[]; y: T[]; result: T[] } {
      const result = y.filter(el => !x.includes(el));
      return { x, y, result };
    }
  }
  
  export const differenceService = new DifferenceService();