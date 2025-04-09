"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateTotalCost;
function calculateTotalCost(paintCost, laborCost) {
    if (typeof paintCost !== 'number' || typeof laborCost !== 'number') {
        throw new Error('Both paint cost and labor cost must be numbers');
    }
    if (paintCost < 0 || laborCost < 0) {
        throw new Error('Paint cost and labor cost must be non-negative');
    }
    return paintCost + laborCost;
}
//# sourceMappingURL=calculateTotalCost.js.map