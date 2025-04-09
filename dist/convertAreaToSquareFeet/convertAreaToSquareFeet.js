"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = convertAreaToSquareFeet;
function convertAreaToSquareFeet(areaInSquareMeters) {
    if (typeof areaInSquareMeters !== 'number') {
        throw new Error('Input must be a number');
    }
    if (areaInSquareMeters < 0) {
        throw new Error('Area must be a non-negative value');
    }
    const conversionFactor = 10.7639;
    return areaInSquareMeters * conversionFactor;
}
//# sourceMappingURL=convertAreaToSquareFeet.js.map