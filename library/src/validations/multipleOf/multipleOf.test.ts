import { describe, expect, test } from 'vitest';
import { multipleOf } from './multipleOf.ts';

describe('multipleOf', () => {
  const info = { reason: 'any' as const };

  test('should pass only multiples', () => {
    const validate = multipleOf(5);
    const value1 = 5;
    expect(validate(value1, info)).toEqual({ output: value1 });
    const value2 = 10;
    expect(validate(value2, info)).toEqual({ output: value2 });
    const value3 = 15;
    expect(validate(value3, info)).toEqual({ output: value3 });
    const value4 = -20;
    expect(validate(value4, info)).toEqual({ output: value4 });

    expect(validate(3, info).issues?.length).toBe(1);
    expect(validate(7, info).issues?.length).toBe(1);
    expect(validate(11, info).issues?.length).toBe(1);
    expect(validate(-14, info).issues?.length).toBe(1);
  });

  test('should return custom error message', () => {
    const error = 'Value is not a multiple of 3!';
    const validate = multipleOf(3, error);
    expect(validate(1, info).issues?.[0].message).toBe(error);
  });
});
