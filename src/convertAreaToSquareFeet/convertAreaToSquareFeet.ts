export default function convertAreaToSquareFeet(areaInSquareMeters: number): number {
  if (typeof areaInSquareMeters !== 'number') {
    throw new Error('Input must be a number');
  }

  if (areaInSquareMeters < 0) {
    throw new Error('Area must be a non-negative value');
  }

  const conversionFactor = 10.7639;
  return areaInSquareMeters * conversionFactor;
}
