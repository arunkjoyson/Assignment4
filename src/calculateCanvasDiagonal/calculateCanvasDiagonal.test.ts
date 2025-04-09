import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive numbers', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 when both length and width are 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should throw error if either length or width is negative', () => {
    expect(() => calculateCanvasDiagonal('-3', '4')).toThrow('Length and width must be non-negative values');
    expect(() => calculateCanvasDiagonal('3', '-4')).toThrow('Length and width must be non-negative values');
    expect(() => calculateCanvasDiagonal('-3', '-4')).toThrow('Length and width must be non-negative values');
  });

  test('should return NaN for non-numeric strings', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('should throw error if length or width is null', () => {
    expect(() => calculateCanvasDiagonal(null as any, '4')).toThrow('Length and width are required');
    expect(() => calculateCanvasDiagonal('3', null as any)).toThrow('Length and width are required');
  });

  test('should throw error if length or width is undefined', () => {
    expect(() => calculateCanvasDiagonal(undefined as any, '4')).toThrow('Length and width are required');
    expect(() => calculateCanvasDiagonal('3', undefined as any)).toThrow('Length and width are required');
  });
});

