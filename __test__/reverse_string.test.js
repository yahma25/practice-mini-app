import {
  reverseByBuiltInFunction,
  reverseByLoop,
  reverseByRecursion,
} from '../src/string/reverse_string';

describe('All of strings should be reversed', () => {
  const alphabet = 'Vanilla Javascript';
  const numbers = '123456789';
  const hangul = '가나다라마바사';

  const correctAlphabet = 'tpircsavaJ allinaV';
  const correctNumbers = '987654321';
  const correctHangul = '사바마라다나가';

  test('by built-in function', () => {
    expect(reverseByBuiltInFunction(alphabet)).toBe(correctAlphabet);
    expect(reverseByLoop(numbers)).toBe(correctNumbers);
    expect(reverseByRecursion(hangul)).toBe(correctHangul);
  });

  test('by loop', () => {
    expect(reverseByBuiltInFunction(alphabet)).toBe(correctAlphabet);
    expect(reverseByLoop(numbers)).toBe(correctNumbers);
    expect(reverseByRecursion(hangul)).toBe(correctHangul);
  });

  test('by recursion', () => {
    expect(reverseByBuiltInFunction(alphabet)).toBe(correctAlphabet);
    expect(reverseByLoop(numbers)).toBe(correctNumbers);
    expect(reverseByRecursion(hangul)).toBe(correctHangul);
  });
});
