import { describe, expect, test } from 'vitest';
import { toUpperCase } from './toUpperCase.ts';

describe('toUpperCase', () => {
  test('should transform to upper case', () => {
    const transform = toUpperCase();
    expect(transform('TeSt')).toEqual({ output: 'TEST' });
  });
});
