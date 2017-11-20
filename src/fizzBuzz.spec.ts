import { check, gen } from 'ts-bdd-check'

const fizzBuzz = (index: number): string => {
  if (index === 0) {
    return '0'
  }
  if (index % (7 * 5 * 3) === 0) {
    return 'fizzbuzzbazz'
  }
  if (index % 21 === 0) {
    return 'fizzbazz'
  }
  if (index % (7 * 5) === 0) {
    return 'buzzbazz'
  }
  if (index % 3 === 0 && index % 5 === 0) {
    return 'fizzbuzz'
  }
  if (index % 3 === 0) {
    return 'fizz'
  }
  if (index % 5 === 0) {
    return 'buzz'
  }
  if (index % 7 === 0) {
    return 'bazz'
  }
  return String(index)
}

describe('fn', () => {
  it('fn(0) => "0"', () => expect(fizzBuzz(0)).toEqual('0'))

  it(
    'forall i in number',
    check(index => expect(typeof fizzBuzz(index)).toBe('string'), gen.posInt),
  )
  it(
    'forall i > 0 and i divisible by 3 fn(i) should countain "fizz"',
    check(
      index => expect(fizzBuzz(index)).toContain('fizz'),
      gen.posInt.then(x => x + 1).then(x => x * 3),
    ),
  )

  it(
    'forall i > 0 and i divisible by 5 fn(i) should countain "buzz"',
    check(
      index => expect(fizzBuzz(index)).toContain('buzz'),
      gen.posInt.then(x => x + 1).then(x => x * 5),
    ),
  )

  it(
    'forall i > 0 and i divisible by 7 fn(i) should countain "bazz"',
    check(
      index => expect(fizzBuzz(index)).toContain('bazz'),
      gen.posInt.suchThat(x => x > 0).suchThat(x => x % 7 === 0),
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

const fizbuzAnswer = (atNumber: number): string =>
  atNumber % 3 === 0 && atNumber % 5 === 0 && atNumber % 7 === 0
    ? 'fizbuzbaz'
    : atNumber % 3 === 0 && atNumber % 5 === 0
      ? 'fizbuz'
      : atNumber % 3 === 0 && atNumber % 7 === 0
        ? 'fizbaz'
        : atNumber % 5 === 0 && atNumber % 7 === 0
          ? 'buzbaz'
          : atNumber % 3 === 0
            ? 'fiz'
            : atNumber % 5 === 0
              ? 'buz'
              : atNumber % 7 === 0 ? 'baz' : String(atNumber)

describe('given the function fizBuz', () => {
  it("given 1 should be '1'", () => {
    expect(fizbuzAnswer(1)).toBe('1')
  })

  it(
    'forall numbers divisible by 3 then answer should contain `fiz`',
    check(
      atNumber => expect(fizbuzAnswer(atNumber)).toContain('fiz'),
      gen.posInt.suchThat(x => x > 0).then(x => x * 3),
    ),
  )

  it(
    'forall numbers divisible by 5 then answer should contain `buz`',
    check(
      atNumber => expect(fizbuzAnswer(atNumber)).toContain('buz'),
      gen.posInt.suchThat(x => x > 0).then(x => x * 5),
    ),
  )

  it(
    'forall numbers divisible by 7 then answer should contain `baz`',
    check(
      atNumber => expect(fizbuzAnswer(atNumber)).toContain('baz'),
      gen.posInt.suchThat(x => x > 0).then(x => x * 7),
    ),
  )
})
