"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasDiagonal_1 = __importDefault(require("./calculateCanvasDiagonal"));
describe('calculateCanvasDiagonal', () => {
    test('should calculate diagonal correctly for positive numbers', () => {
        expect((0, calculateCanvasDiagonal_1.default)('3', '4')).toBeCloseTo(5);
        expect((0, calculateCanvasDiagonal_1.default)('6', '8')).toBeCloseTo(10);
        expect((0, calculateCanvasDiagonal_1.default)('5', '12')).toBeCloseTo(13);
    });
    test('should return 0 when both length and width are 0', () => {
        expect((0, calculateCanvasDiagonal_1.default)('0', '0')).toBe(0);
    });
    test('should throw error if either length or width is negative', () => {
        expect(() => (0, calculateCanvasDiagonal_1.default)('-3', '4')).toThrow('Length and width must be non-negative values');
        expect(() => (0, calculateCanvasDiagonal_1.default)('3', '-4')).toThrow('Length and width must be non-negative values');
        expect(() => (0, calculateCanvasDiagonal_1.default)('-3', '-4')).toThrow('Length and width must be non-negative values');
    });
    test('should return NaN for non-numeric strings', () => {
        expect((0, calculateCanvasDiagonal_1.default)('a', '4')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('3', 'b')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('a', 'b')).toBeNaN();
    });
    test('should throw error if length or width is null', () => {
        expect(() => (0, calculateCanvasDiagonal_1.default)(null, '4')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasDiagonal_1.default)('3', null)).toThrow('Length and width are required');
    });
    test('should throw error if length or width is undefined', () => {
        expect(() => (0, calculateCanvasDiagonal_1.default)(undefined, '4')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasDiagonal_1.default)('3', undefined)).toThrow('Length and width are required');
    });
});
//# sourceMappingURL=calculateCanvasDiagonal.test.js.map