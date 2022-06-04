import {countDivisors} from '../countDivisors'

describe('countDivisors', () => {
    it("Testing for 1", () => {
        expect(countDivisors(1)).toBe(1)
    });
    it("Testing for 10", () => {
        expect(countDivisors(10)).toBe(4)
    });
    it("Testing for 11", () => {
        expect(countDivisors(11)).toBe(2)
    });
    it("Testing for 54", () => {
        expect(countDivisors(54)).toBe(8)
    });
    it("Testing for 64", () => {
        console.log(countDivisors(64))
        expect(countDivisors(64)).toBe(7)        
    });
  });

