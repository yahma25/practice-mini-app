/**
 * 3 ways to reverse string.
 */

// First, use built-in function
export function reverseByBuiltInFunction(str) {
  return str.split('').reverse().join('');
}

console.log(reverseByBuiltInFunction('Vanilla Javascript')); // 'tpircsavaJ allinaV'

/**
 * Second, use loop
 * point
 *  1) does not use '+=' operator because of an order.
 *  2) does not use 'for in' in the loop because it is an index number.
 */
export function reverseByLoop(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseByLoop('Vanilla Javascript')); // 'tpircsavaJ allinaV'

/**
 * Third, use recursion
 * point: substr(1) because if over range, it returns ''. (empty)
 */
export function reverseByRecursion(str) {
  if (str === '') {
    return str;
  } else {
    return reverseByRecursion(str.substr(1)) + str[0];
  }
}

/**
 * for example) if parameter is 'script'
 *  1) cript + s
 *  2) ript + c
 *  3) ipt + r
 *  4) pt + i
 *  5) t + p
 *  6) '' + t
 *  and then returns all of the value combining.
 *  7) '' + t
 *  8) t + p
 *  9) tp + i
 * 10) tpi + r
 * 11) tpir + c
 * 12) tpirc + s
 * 13) tpircs
 */
console.log(reverseByRecursion('script')); // 'tpircs'
