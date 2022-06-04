export function countDivisors(n: number) {
    let arrAcumulator: number[] = []
  
      for (let i = 0; i < n; i++) {
          if(Number.isInteger(n / (i + 1))) {
              arrAcumulator.push(i + 1)
          }
      }
      
      return arrAcumulator.length
  }