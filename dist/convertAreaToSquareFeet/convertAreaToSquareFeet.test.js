"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertAreaToSquareFeet_1 = __importDefault(require("./convertAreaToSquareFeet"));
describe('convertAreaToSquareFeet', () => {
    test('should convert area correctly for positive values', () => {
        expect((0, convertAreaToSquareFeet_1.default)(100)).toBeCloseTo(1076.39);
        expect((0, convertAreaToSquareFeet_1.default)(200)).toBeCloseTo(2152.78);
        expect((0, convertAreaToSquareFeet_1.default)(150)).toBeCloseTo(1614.585);
    });
    test('should return 0 for area of 0', () => {
        expect((0, convertAreaToSquareFeet_1.default)(0)).toBe(0);
    });
    test('should handle negative values correctly', () => {
        expect((0, convertAreaToSquareFeet_1.default)(-100)).toBeCloseTo(-1076.39);
        expect((0, convertAreaToSquareFeet_1.default)(-200)).toBeCloseTo(-2152.78);
        expect((0, convertAreaToSquareFeet_1.default)(-150)).toBeCloseTo(-1614.585);
    });
});
//# sourceMappingURL=convertAreaToSquareFeet.test.js.map