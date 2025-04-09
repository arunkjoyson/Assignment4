import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should return correct area for valid dimensions', () => {
    expect(calculateCanvasSize('10', '100')).toEqual(1000);
    expect(calculateCanvasSize('5', '4')).toEqual(20);
  });

  test('should return 0 when one or both dimensions are 0', () => {
    expect(calculateCanvasSize('0', '10')).toEqual(0);
    expect(calculateCanvasSize('10', '0')).toEqual(0);
    expect(calculateCanvasSize('0', '0')).toEqual(0);
  });

  test('should throw error for negative values', () => {
    expect(() => calculateCanvasSize('-5', '10')).toThrow('Length and width must be non-negative values');
    expect(() => calculateCanvasSize('10', '-10')).toThrow('Length and width must be non-negative values');
  });

  test('should return NaN for non-numeric inputs', () => {
    expect(calculateCanvasSize('abc', '10')).toBeNaN();
    expect(calculateCanvasSize('10', 'xyz')).toBeNaN();
    expect(calculateCanvasSize('abc', 'xyz')).toBeNaN();
  });

  test('should throw error for null values', () => {
    expect(() => calculateCanvasSize(null as any, '10')).toThrow('Length and width are required');
    expect(() => calculateCanvasSize('10', null as any)).toThrow('Length and width are required');
  });

  test('should throw error for undefined values', () => {
    expect(() => calculateCanvasSize(undefined as any, '10')).toThrow('Length and width are required');
    expect(() => calculateCanvasSize('10', undefined as any)).toThrow('Length and width are required');
  });
});
