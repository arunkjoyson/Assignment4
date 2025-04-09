"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateCanvasSize;
function calculateCanvasSize(length, width) {
    // Validate presence of input
    if (length == null || width == null) {
        throw new Error("Length and width are required");
    }
    // Convert strings to numbers
    const len = parseFloat(length);
    const wid = parseFloat(width);
    // Validate that inputs are numeric
    if (isNaN(len) || isNaN(wid)) {
        return NaN;
    }
    // Negative values are not allowed
    if (len < 0 || wid < 0) {
        throw new Error("Length and width must be non-negative values");
    }
    // Return the canvas area
    return len * wid;
}
//# sourceMappingURL=calculateCanvasSize.js.map