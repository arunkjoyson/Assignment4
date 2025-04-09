"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatePaintCost_1 = __importDefault(require("./calculatePaintCost"));
describe('calculatePaintCost', () => {
    test('should calculate paint cost correctly for positive values', () => {
        expect((0, calculatePaintCost_1.default)(10, 5)).toBe(50);
        expect((0, calculatePaintCost_1.default)(20, 7.5)).toBe(150);
        expect((0, calculatePaintCost_1.default)(15, 10)).toBe(150);
    });
    test('should return 0 when paint required is 0', () => {
        expect((0, calculatePaintCost_1.default)(0, 5)).toBe(0);
    });
    test('should return 0 when cost per liter is 0', () => {
        expect((0, calculatePaintCost_1.default)(10, 0)).toBe(0);
    });
    test('should handle negative values correctly', () => {
        expect((0, calculatePaintCost_1.default)(-10, 5)).toBe(-50);
        expect((0, calculatePaintCost_1.default)(10, -5)).toBe(-50);
        expect((0, calculatePaintCost_1.default)(-10, -5)).toBe(50);
    });
});
//# sourceMappingURL=calculatePaintCost.test.js.map