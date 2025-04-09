"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredForMultipleCoats_1 = __importDefault(require("./paintRequiredForMultipleCoats"));
describe('paintRequiredForMultipleCoats', () => {
    test('should calculate paint required correctly for positive values', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 2)).toBe(20);
        expect((0, paintRequiredForMultipleCoats_1.default)(200, 20, 3)).toBe(30);
        expect((0, paintRequiredForMultipleCoats_1.default)(150, 15, 4)).toBe(40);
    });
    test('should return 0 for area of 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(0, 10, 2)).toBe(0);
    });
    test('should return 0 for coveragePerLiter of 0', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 0, 2)).toBe(Infinity);
    });
    test('should handle negative values correctly', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(-100, 10, 2)).toBe(-20);
        expect((0, paintRequiredForMultipleCoats_1.default)(100, -10, 2)).toBe(-20);
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, -2)).toBe(-20);
    });
    test('should handle coats of 0 correctly', () => {
        expect((0, paintRequiredForMultipleCoats_1.default)(100, 10, 0)).toBe(0);
    });
});
//# sourceMappingURL=paintRequiredForMultipleCoats.test.js.map