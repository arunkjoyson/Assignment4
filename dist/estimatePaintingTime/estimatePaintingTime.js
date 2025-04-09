"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = estimatePaintingTime;
function estimatePaintingTime(area, paintingSpeed) {
    if (typeof area !== 'number' || typeof paintingSpeed !== 'number') {
        throw new Error('Both area and painting speed must be numbers');
    }
    if (area < 0 || paintingSpeed < 0) {
        throw new Error('Area and painting speed must be non-negative');
    }
    if (paintingSpeed === 0) {
        return Infinity;
    }
    return area / paintingSpeed;
}
//# sourceMappingURL=estimatePaintingTime.js.map