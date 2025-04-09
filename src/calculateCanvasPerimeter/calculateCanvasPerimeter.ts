export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number {
  if (length == null || width == null) {
    throw new Error("Length and width are required");
  }

  const len = parseFloat(length);
  const wid = parseFloat(width);

  if (isNaN(len) || isNaN(wid)) {
    return NaN;
  }

  if (len < 0 || wid < 0) {
    throw new Error("Length and width must be non-negative values");
  }

  return 2 * (len + wid);
}
