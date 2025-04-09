export default function paintRequiredForMultipleCoats(
  area: number,
  coveragePerLiter: number,
  coats: number
): number {
  if (
    typeof area !== 'number' ||
    typeof coveragePerLiter !== 'number' ||
    typeof coats !== 'number'
  ) {
    throw new Error('All inputs must be numbers');
  }

  if (area < 0 || coveragePerLiter <= 0 || coats < 0) {
    throw new Error('Area and number of coats must be non-negative and coverage per liter must be greater than 0');
  }

  return (area * coats) / coveragePerLiter;
}
