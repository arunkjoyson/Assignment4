import paintRequiredCalculator from "./paintRequiredCalculator";

function calculateTriangleArea(width: number, height: number): number {
  const base = width / 3;
  return 0.5 * base * height;
}

function main() {
  const width = 3; // in meters
  const height = 2; // in meters
  const copies = 5000;
  const coveragePerLiter = 11.4;

  const triangleArea = calculateTriangleArea(width, height);
  const totalPaintedArea = triangleArea * copies;
  const paintRequired = paintRequiredCalculator(totalPaintedArea, coveragePerLiter);

  console.log(`🎨 Paint required for ${copies} copies: ${paintRequired.toFixed(2)} liters`);
}

main();
// This code calculates the amount of paint required for a triangular area, given its width and height.
// It uses the `paintRequiredCalculator` function to determine the amount of paint needed based on the total area and coverage per liter.
// The `calculateTriangleArea` function computes the area of a triangle using the formula: (base * height) / 2.
// The base is calculated as one-third of the width.
// The `main` function sets the dimensions of the triangle, the number of copies, and the coverage per liter.
// It then calculates the total painted area and the amount of paint required, logging the result to the console.