import calculateCanvasPerimeter from './calculateCanvasPerimeter';

describe('calculateCanvasPerimeter', () => {
  test('should return correct perimeter for valid inputs', () => {
    expect(calculateCanvasPerimeter('10', '100')).toEqual(220);
    expect(calculateCanvasPerimeter('5', '5')).toEqual(20);
  });

  test('should return 0 if both length and width are 0', () => {
    expect(calculateCanvasPerimeter('0', '0')).toEqual(0);
  });

  test('should throw error for negative values', () => {
    expect(() => calculateCanvasPerimeter('-10', '100')).toThrow('Length and width must be non-negative values');
    expect(() => calculateCanvasPerimeter('10', '-100')).toThrow('Length and width must be non-negative values');
  });

  test('should return NaN for non-numeric inputs', () => {
    expect(calculateCanvasPerimeter('abc', '100')).toBeNaN();
    expect(calculateCanvasPerimeter('10', 'xyz')).toBeNaN();
    expect(calculateCanvasPerimeter('abc', 'xyz')).toBeNaN();
  });

  test('should throw error for null inputs', () => {
    expect(() => calculateCanvasPerimeter(null as any, '10')).toThrow('Length and width are required');
    expect(() => calculateCanvasPerimeter('10', null as any)).toThrow('Length and width are required');
  });

  test('should throw error for undefined inputs', () => {
    expect(() => calculateCanvasPerimeter(undefined as any, '10')).toThrow('Length and width are required');
    expect(() => calculateCanvasPerimeter('10', undefined as any)).toThrow('Length and width are required');
  });
});
