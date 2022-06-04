import {toWeirdCase} from '../toWeirdCase'

describe('toWeirdCase', () => {
    it('should return the correct value for a single word', function(){
      const formattedWord = toWeirdCase('This')

      expect(formattedWord).toBe('ThIs')
    });
    it('should return the correct value for multiple words', function(){
      const formattedSentence = toWeirdCase('This is a test');

      expect(formattedSentence).toBe('ThIs Is A TeSt')
    });
  });