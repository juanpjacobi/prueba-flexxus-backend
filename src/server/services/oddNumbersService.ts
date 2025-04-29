export class OddNumbersService {

    getOddNumbers(): number[] {
      const result: number[] = [];
      for (let i = 1; i <= 100; i += 2) {
        result.push(i);
      }
      return result;
    }
  }
  
  export const oddNumbersService = new OddNumbersService();
  