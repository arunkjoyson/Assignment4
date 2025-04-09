import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39, 2);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78, 2);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585, 3);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('should throw error for negative area values', () => {
    expect(() => convertAreaToSquareFeet(-100)).toThrow('Area must be a non-negative value');
    expect(() => convertAreaToSquareFeet(-1)).toThrow('Area must be a non-negative value');
  });

  test('should throw error if input is not a number', () => {
    expect(() => convertAreaToSquareFeet("100" as any)).toThrow('Input must be a number');
    expect(() => convertAreaToSquareFeet(null as any)).toThrow('Input must be a number');
    expect(() => convertAreaToSquareFeet(undefined as any)).toThrow('Input must be a number');
  });
});
