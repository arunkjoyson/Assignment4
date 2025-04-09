"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estimatePaintingTime_1 = __importDefault(require("./estimatePaintingTime"));
describe('estimatePaintingTime', () => {
    test('should calculate painting time correctly for positive values', () => {
        expect((0, estimatePaintingTime_1.default)(100, 10)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(200, 20)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(150, 15)).toBe(10);
    });
    test('should return Infinity for painting speed of 0', () => {
        expect((0, estimatePaintingTime_1.default)(100, 0)).toBe(Infinity);
    });
    test('should handle area of 0 correctly', () => {
        expect((0, estimatePaintingTime_1.default)(0, 10)).toBe(0);
    });
    test('should handle negative values correctly', () => {
        expect((0, estimatePaintingTime_1.default)(-100, 10)).toBe(-10);
        expect((0, estimatePaintingTime_1.default)(100, -10)).toBe(-10);
        expect((0, estimatePaintingTime_1.default)(-100, -10)).toBe(10);
    });
});
//# sourceMappingURL=estimatePaintingTime.test.js.map