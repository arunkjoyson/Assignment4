"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = paintRequiredCalculator;
function paintRequiredCalculator(paintedArea, coveragePerLiter) {
    if (typeof paintedArea !== 'number' || typeof coveragePerLiter !== 'number') {
        throw new Error('Both painted area and coverage per liter must be numbers');
    }
    if (paintedArea < 0 || coveragePerLiter <= 0) {
        throw new Error('Painted area must be non-negative and coverage per liter must be greater than 0');
    }
    return paintedArea / coveragePerLiter;
}
//# sourceMappingURL=paintRequiredCalculator.js.map