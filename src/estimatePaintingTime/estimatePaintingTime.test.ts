import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for valid inputs', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return 0 if area is 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should return Infinity if painting speed is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('should throw error for negative area', () => {
    expect(() => estimatePaintingTime(-100, 10)).toThrow('Area and painting speed must be non-negative');
  });

  test('should throw error for negative painting speed', () => {
    expect(() => estimatePaintingTime(100, -10)).toThrow('Area and painting speed must be non-negative');
  });

  test('should throw error for both values negative', () => {
    expect(() => estimatePaintingTime(-100, -10)).toThrow('Area and painting speed must be non-negative');
  });

  test('should throw error for non-numeric inputs', () => {
    expect(() => estimatePaintingTime("100" as any, 10)).toThrow('Both area and painting speed must be numbers');
    expect(() => estimatePaintingTime(100, "10" as any)).toThrow('Both area and painting speed must be numbers');
    expect(() => estimatePaintingTime(null as any, 10)).toThrow('Both area and painting speed must be numbers');
    expect(() => estimatePaintingTime(100, undefined as any)).toThrow('Both area and painting speed must be numbers');
  });
});
