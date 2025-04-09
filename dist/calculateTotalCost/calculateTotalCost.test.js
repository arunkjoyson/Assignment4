"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalCost_1 = __importDefault(require("./calculateTotalCost"));
describe('calculateTotalCost', () => {
    test('should calculate total cost correctly for valid positive numbers', () => {
        expect((0, calculateTotalCost_1.default)(100, 50)).toBe(150);
        expect((0, calculateTotalCost_1.default)(200, 75)).toBe(275);
        expect((0, calculateTotalCost_1.default)(150, 100)).toBe(250);
    });
    test('should return paint cost if labor cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(100, 0)).toBe(100);
    });
    test('should return labor cost if paint cost is 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 50)).toBe(50);
    });
    test('should return 0 if both costs are 0', () => {
        expect((0, calculateTotalCost_1.default)(0, 0)).toBe(0);
    });
    test('should throw error for negative paint cost', () => {
        expect(() => (0, calculateTotalCost_1.default)(-100, 50)).toThrow('Paint cost and labor cost must be non-negative');
    });
    test('should throw error for negative labor cost', () => {
        expect(() => (0, calculateTotalCost_1.default)(100, -50)).toThrow('Paint cost and labor cost must be non-negative');
    });
    test('should throw error if both costs are negative', () => {
        expect(() => (0, calculateTotalCost_1.default)(-100, -50)).toThrow('Paint cost and labor cost must be non-negative');
    });
    test('should throw error if inputs are not numbers', () => {
        expect(() => (0, calculateTotalCost_1.default)("100", 50)).toThrow('Both paint cost and labor cost must be numbers');
        expect(() => (0, calculateTotalCost_1.default)(100, "50")).toThrow('Both paint cost and labor cost must be numbers');
    });
    test('should throw error if inputs are null or undefined', () => {
        expect(() => (0, calculateTotalCost_1.default)(null, 50)).toThrow('Both paint cost and labor cost must be numbers');
        expect(() => (0, calculateTotalCost_1.default)(100, null)).toThrow('Both paint cost and labor cost must be numbers');
        expect(() => (0, calculateTotalCost_1.default)(undefined, 50)).toThrow('Both paint cost and labor cost must be numbers');
        expect(() => (0, calculateTotalCost_1.default)(100, undefined)).toThrow('Both paint cost and labor cost must be numbers');
    });
});
//# sourceMappingURL=calculateTotalCost.test.js.map