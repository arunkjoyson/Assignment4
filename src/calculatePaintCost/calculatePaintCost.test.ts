import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate correct paint cost for valid numbers', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 if paintRequired is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 if costPerLiter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should throw error for negative paintRequired', () => {
    expect(() => calculatePaintCost(-1, 5)).toThrow('Paint required and cost per liter must be non-negative');
  });

  test('should throw error for negative costPerLiter', () => {
    expect(() => calculatePaintCost(10, -5)).toThrow('Paint required and cost per liter must be non-negative');
  });

  test('should throw error if both values are negative', () => {
    expect(() => calculatePaintCost(-10, -5)).toThrow('Paint required and cost per liter must be non-negative');
  });

  test('should throw error if paintRequired is a string', () => {
    expect(() => calculatePaintCost("10" as any, 5)).toThrow('Both inputs must be numbers');
  });

  test('should throw error if costPerLiter is a string', () => {
    expect(() => calculatePaintCost(10, "5" as any)).toThrow('Both inputs must be numbers');
  });

  test('should throw error if paintRequired is null or undefined', () => {
    expect(() => calculatePaintCost(null as any, 5)).toThrow('Both inputs must be numbers');
    expect(() => calculatePaintCost(undefined as any, 5)).toThrow('Both inputs must be numbers');
  });

  test('should throw error if costPerLiter is null or undefined', () => {
    expect(() => calculatePaintCost(10, null as any)).toThrow('Both inputs must be numbers');
    expect(() => calculatePaintCost(10, undefined as any)).toThrow('Both inputs must be numbers');
  });
});
