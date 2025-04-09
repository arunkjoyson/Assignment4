import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for valid positive numbers', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost if labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost if paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should return 0 if both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should throw error for negative paint cost', () => {
    expect(() => calculateTotalCost(-100, 50)).toThrow('Paint cost and labor cost must be non-negative');
  });

  test('should throw error for negative labor cost', () => {
    expect(() => calculateTotalCost(100, -50)).toThrow('Paint cost and labor cost must be non-negative');
  });

  test('should throw error if both costs are negative', () => {
    expect(() => calculateTotalCost(-100, -50)).toThrow('Paint cost and labor cost must be non-negative');
  });

  test('should throw error if inputs are not numbers', () => {
    expect(() => calculateTotalCost("100" as any, 50)).toThrow('Both paint cost and labor cost must be numbers');
    expect(() => calculateTotalCost(100, "50" as any)).toThrow('Both paint cost and labor cost must be numbers');
  });

  test('should throw error if inputs are null or undefined', () => {
    expect(() => calculateTotalCost(null as any, 50)).toThrow('Both paint cost and labor cost must be numbers');
    expect(() => calculateTotalCost(100, null as any)).toThrow('Both paint cost and labor cost must be numbers');
    expect(() => calculateTotalCost(undefined as any, 50)).toThrow('Both paint cost and labor cost must be numbers');
    expect(() => calculateTotalCost(100, undefined as any)).toThrow('Both paint cost and labor cost must be numbers');
  });
});

