export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  // Check if either input is null or undefined
  if (length == null || width == null) {
    throw new Error('Length and width are required');
  }

  // Convert input strings to numbers
  const len = parseFloat(length);
  const wid = parseFloat(width);

  // Validate parsed numbers
  if (isNaN(len) || isNaN(wid)) {
    return NaN;
  }

  // Length and width must be non-negative
  if (len < 0 || wid < 0) {
    throw new Error('Length and width must be non-negative values');
  }

  // Return 0 if both are 0
  if (len === 0 && wid === 0) {
    return 0;
  }

  // Use Pythagorean theorem to calculate diagonal
  return Math.sqrt(Math.pow(len, 2) + Math.pow(wid, 2));
}
