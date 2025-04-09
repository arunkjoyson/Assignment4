"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculatePaintCost_1 = __importDefault(require("./calculatePaintCost"));
describe('calculatePaintCost', () => {
    test('should calculate correct paint cost for valid numbers', () => {
        expect((0, calculatePaintCost_1.default)(10, 5)).toBe(50);
        expect((0, calculatePaintCost_1.default)(20, 7.5)).toBe(150);
        expect((0, calculatePaintCost_1.default)(15, 10)).toBe(150);
    });
    test('should return 0 if paintRequired is 0', () => {
        expect((0, calculatePaintCost_1.default)(0, 5)).toBe(0);
    });
    test('should return 0 if costPerLiter is 0', () => {
        expect((0, calculatePaintCost_1.default)(10, 0)).toBe(0);
    });
    test('should throw error for negative paintRequired', () => {
        expect(() => (0, calculatePaintCost_1.default)(-1, 5)).toThrow('Paint required and cost per liter must be non-negative');
    });
    test('should throw error for negative costPerLiter', () => {
        expect(() => (0, calculatePaintCost_1.default)(10, -5)).toThrow('Paint required and cost per liter must be non-negative');
    });
    test('should throw error if both values are negative', () => {
        expect(() => (0, calculatePaintCost_1.default)(-10, -5)).toThrow('Paint required and cost per liter must be non-negative');
    });
    test('should throw error if paintRequired is a string', () => {
        expect(() => (0, calculatePaintCost_1.default)("10", 5)).toThrow('Both inputs must be numbers');
    });
    test('should throw error if costPerLiter is a string', () => {
        expect(() => (0, calculatePaintCost_1.default)(10, "5")).toThrow('Both inputs must be numbers');
    });
    test('should throw error if paintRequired is null or undefined', () => {
        expect(() => (0, calculatePaintCost_1.default)(null, 5)).toThrow('Both inputs must be numbers');
        expect(() => (0, calculatePaintCost_1.default)(undefined, 5)).toThrow('Both inputs must be numbers');
    });
    test('should throw error if costPerLiter is null or undefined', () => {
        expect(() => (0, calculatePaintCost_1.default)(10, null)).toThrow('Both inputs must be numbers');
        expect(() => (0, calculatePaintCost_1.default)(10, undefined)).toThrow('Both inputs must be numbers');
    });
});
//# sourceMappingURL=calculatePaintCost.test.js.map