import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should calculate paint required correctly", () => {
    expect(paintRequiredCalculator(50, 10)).toEqual(5);
    expect(paintRequiredCalculator(100, 20)).toEqual(5);
    expect(paintRequiredCalculator(75, 15)).toEqual(5);
  });

  test("should throw error if painted area is negative", () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrow(
      "Painted area must be non-negative and coverage per liter must be greater than 0"
    );
  });

  test("should throw error if coverage per liter is zero", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow(
      "Painted area must be non-negative and coverage per liter must be greater than 0"
    );
  });

  test("should throw error if coverage per liter is negative", () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrow(
      "Painted area must be non-negative and coverage per liter must be greater than 0"
    );
  });

  test("should throw error for non-numeric inputs", () => {
    expect(() => paintRequiredCalculator("50" as any, 10)).toThrow(
      "Both painted area and coverage per liter must be numbers"
    );
    expect(() => paintRequiredCalculator(50, "10" as any)).toThrow(
      "Both painted area and coverage per liter must be numbers"
    );
    expect(() => paintRequiredCalculator(null as any, 10)).toThrow(
      "Both painted area and coverage per liter must be numbers"
    );
    expect(() => paintRequiredCalculator(50, undefined as any)).toThrow(
      "Both painted area and coverage per liter must be numbers"
    );
  });
});
