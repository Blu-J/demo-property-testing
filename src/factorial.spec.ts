import { check, gen } from 'ts-bdd-check'
import fp from '@logrhythm/lodash-fp'

const fn = (x: number): number => {
  if (x <= 0) {
    return 1
  }
  return fp.range(1, x + 1).reduce((acc, y) => acc * y, 1)
}

describe('fn', () => {
  it('fn(0) -> 1', () => expect(fn(0)).toBe(1))

  it(
    'given n as a positive number, fn(n+ 1) = fn(n) * (n + 1)',
    check(
      {
        numTests: 1000,
      },
      n => expect(fn(n + 1)).toBe((n + 1) * fn(n)),
      gen.posInt,
    ),
  )
})
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

const factorialAnswer = (atNumber: number): number => {
  if (atNumber <= 1) {
    return 1
  }
  return factorialAnswer(atNumber - 1) * atNumber
}

describe('given the function factorial', () => {
  it('for 1 answer is 1 f(1) = 1', () => {
    expect(factorialAnswer(1)).toBe(1)
  })

  it('for 0 answer is 1 f(0) = 1', () => {
    expect(factorialAnswer(0)).toBe(1)
  })

  it(
    'positive numbers i then factorial of f(i + 1) should be f(i) * (i + 1)  --> ∀ i ∈ ℕ : f(i + 1) = f(i) * (i + 1)',
    check(
      { numTests: 100 },
      i => expect(factorialAnswer(i + 1)).toEqual((i + 1) * factorialAnswer(i)),
      gen.posInt,
    ),
  )

  it('f(5) = 120', () => expect(factorialAnswer(5)).toBe(120))
})
