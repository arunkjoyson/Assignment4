"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertAreaToSquareFeet_1 = __importDefault(require("./convertAreaToSquareFeet"));
describe('convertAreaToSquareFeet', () => {
    test('should convert area correctly for positive values', () => {
        expect((0, convertAreaToSquareFeet_1.default)(100)).toBeCloseTo(1076.39, 2);
        expect((0, convertAreaToSquareFeet_1.default)(200)).toBeCloseTo(2152.78, 2);
        expect((0, convertAreaToSquareFeet_1.default)(150)).toBeCloseTo(1614.585, 3);
    });
    test('should return 0 for area of 0', () => {
        expect((0, convertAreaToSquareFeet_1.default)(0)).toBe(0);
    });
    test('should throw error for negative area values', () => {
        expect(() => (0, convertAreaToSquareFeet_1.default)(-100)).toThrow('Area must be a non-negative value');
        expect(() => (0, convertAreaToSquareFeet_1.default)(-1)).toThrow('Area must be a non-negative value');
    });
    test('should throw error if input is not a number', () => {
        expect(() => (0, convertAreaToSquareFeet_1.default)("100")).toThrow('Input must be a number');
        expect(() => (0, convertAreaToSquareFeet_1.default)(null)).toThrow('Input must be a number');
        expect(() => (0, convertAreaToSquareFeet_1.default)(undefined)).toThrow('Input must be a number');
    });
});
//# sourceMappingURL=convertAreaToSquareFeet.test.js.map