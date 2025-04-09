import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for valid inputs', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 if area is 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should return 0 if number of coats is 0', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });

  test('should throw error if coveragePerLiter is 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 0, 2)).toThrow(
      'Area and number of coats must be non-negative and coverage per liter must be greater than 0'
    );
  });

  test('should throw error for negative area', () => {
    expect(() => paintRequiredForMultipleCoats(-100, 10, 2)).toThrow(
      'Area and number of coats must be non-negative and coverage per liter must be greater than 0'
    );
  });

  test('should throw error for negative coverage per liter', () => {
    expect(() => paintRequiredForMultipleCoats(100, -10, 2)).toThrow(
      'Area and number of coats must be non-negative and coverage per liter must be greater than 0'
    );
  });

  test('should throw error for negative number of coats', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, -2)).toThrow(
      'Area and number of coats must be non-negative and coverage per liter must be greater than 0'
    );
  });

  test('should throw error for non-numeric inputs', () => {
    expect(() => paintRequiredForMultipleCoats("100" as any, 10, 2)).toThrow('All inputs must be numbers');
    expect(() => paintRequiredForMultipleCoats(100, "10" as any, 2)).toThrow('All inputs must be numbers');
    expect(() => paintRequiredForMultipleCoats(100, 10, "2" as any)).toThrow('All inputs must be numbers');
  });
});
