import { check, gen } from 'ts-bdd-check'
import fp from '@logrhythm/lodash-fp'
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
/*
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const fibAnswer = (atNumber: number): number => {
  return fp
    .range(1, atNumber + 1)
    .reduce(acc => [...acc, acc[acc.length - 2] + acc[acc.length - 1]], [1, 1])[
    atNumber
  ]
}

describe('given the function fib', () => {
  it('for 1 answer is 1', () => {
    expect(fibAnswer(1)).toBe(1)
  })

  it('for 0 answer is 1', () => {
    expect(fibAnswer(0)).toBe(1)
  })

  it('for 2 answer is 2', () => {
    expect(fibAnswer(2)).toBe(2)
  })

  it(
    'forall positive numbers i then factorial of f(i+2) should be f(i + 1) + f(i)',
    check(
      i => expect(fibAnswer(i + 2)).toEqual(fibAnswer(i + 1) + fibAnswer(i)),
      gen.posInt,
    ),
  )
})
