describe("sum", () => {
  it("should return the sum of two positive integers", () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  });

  it("should return the sum of a positive and a negative integer", () => {
    const result = sum(2, -3);
    expect(result).toEqual(-1);
  });

  it("should return the sum of two negative integers", () => {
    const result = sum(-2, -3);
    expect(result).toEqual(-5);
  });
});

// better version when asks again:

// Importing the `sum` function
import { sum } from './fileContainingSumFunction'

describe('sum function', () => {
  it('should return 4 when adding 2 and 2', () => {
    expect(sum(2, 2)).toEqual(4)
  })

  it('should return -8 when adding -10 and 2', () => {
    expect(sum(-10, 2)).toEqual(-8)
  })

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0, 0)).toEqual(0)
  })

  it('should return a number', () => {
    expect(typeof sum(2, 2)).toBe('number')
  })

  it('should throw error when a string is passed', () => {
    expect(() => sum('foo', 2)).toThrow()
  })

  it('should throw error when an object is passed', () => {
    expect(() => sum({}, 2)).toThrow()
  })
})

