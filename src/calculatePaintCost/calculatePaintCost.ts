export default function calculatePaintCost(
  paintRequired: number,
  costPerLiter: number
): number {
  // Validate types
  if (typeof paintRequired !== 'number' || typeof costPerLiter !== 'number') {
    throw new Error('Both inputs must be numbers');
  }

  // Validate that values are non-negative
  if (paintRequired < 0 || costPerLiter < 0) {
    throw new Error('Paint required and cost per liter must be non-negative');
  }

  // Calculate and return total cost
  return paintRequired * costPerLiter;
}
