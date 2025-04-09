"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
// Function to calculate the area of a triangle
function calculateTriangleArea(width, height) {
    const base = width / 3; // Triangle base is 1/3 of rectangle width
    return 0.5 * base * height; // Area of triangle
}
// Main function
function main() {
    const width = 3; // Rectangle width in meters
    const height = 2; // Rectangle height in meters
    const copies = 5000; // Number of copies
    const coveragePerLiter = 11.4; // Coverage in m² per liter
    // Calculate the area of one triangle
    const triangleArea = calculateTriangleArea(width, height);
    // Total area to be painted (for all copies)
    const totalPaintedArea = triangleArea * copies;
    // Calculate the amount of paint required using the paint calculator
    const paintRequired = (0, paintRequiredCalculator_1.default)(totalPaintedArea, coveragePerLiter);
    // Output the result
    console.log(`Paint required for ${copies} copies: ${paintRequired.toFixed(2)} liters`);
}
main();
//# sourceMappingURL=main.js.map