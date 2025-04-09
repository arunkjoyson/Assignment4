"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredForMultipleCoats_1 = __importDefault(require("./paintRequiredForMultipleCoats"));
describe('paintRequiredForMultipleCoats', () => {
    test('should calculate paint required correctly for valid inputs', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 2)).toBe(20);
        expect((0, paintRequiredForMultipleCoats_1.default)(200, 20, 3)).toBe(30);
        expect((0, paintRequiredForMultipleCoats_1.default)(150, 15, 4)).toBe(40);
    });
    test('should return 0 if area is 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(0, 10, 2)).toBe(0);
    });
    test('should return 0 if number of coats is 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 0)).toBe(0);
    });
    test('should throw error if coveragePerLiter is 0', () => {
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(100, 0, 2)).toThrow('Area and number of coats must be non-negative and coverage per liter must be greater than 0');
    });
    test('should throw error for negative area', () => {
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(-100, 10, 2)).toThrow('Area and number of coats must be non-negative and coverage per liter must be greater than 0');
    });
    test('should throw error for negative coverage per liter', () => {
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(100, -10, 2)).toThrow('Area and number of coats must be non-negative and coverage per liter must be greater than 0');
    });
    test('should throw error for negative number of coats', () => {
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(100, 10, -2)).toThrow('Area and number of coats must be non-negative and coverage per liter must be greater than 0');
    });
    test('should throw error for non-numeric inputs', () => {
        expect(() => (0, paintRequiredForMultipleCoats_1.default)("100", 10, 2)).toThrow('All inputs must be numbers');
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(100, "10", 2)).toThrow('All inputs must be numbers');
        expect(() => (0, paintRequiredForMultipleCoats_1.default)(100, 10, "2")).toThrow('All inputs must be numbers');
    });
});
//# sourceMappingURL=paintRequiredForMultipleCoats.test.js.map