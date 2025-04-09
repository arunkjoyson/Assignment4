"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalCost_1 = __importDefault(require("./calculateTotalCost"));
describe('calculateTotalCost', () => {
    test('should calculate total cost correctly for positive values', () => {
        expect((0, calculateTotalCost_1.default)(100, 50)).toBe(150);
        expect((0, calculateTotalCost_1.default)(200, 75)).toBe(275);
        expect((0, calculateTotalCost_1.default)(150, 100)).toBe(250);
    });
    test('should return paint cost when labor cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(100, 0)).toBe(100);
    });
    test('should return labor cost when paint cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 50)).toBe(50);
    });
    test('should handle negative values correctly', () => {
        expect((0, calculateTotalCost_1.default)(-100, 50)).toBe(-50);
        expect((0, calculateTotalCost_1.default)(100, -50)).toBe(50);
        expect((0, calculateTotalCost_1.default)(-100, -50)).toBe(-150);
    });
    test('should return 0 when both costs are 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 0)).toBe(0);
    });
});
//# sourceMappingURL=calculateTotalCost.test.js.map