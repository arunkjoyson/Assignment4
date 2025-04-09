"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasDiagonal_1 = __importDefault(require("./calculateCanvasDiagonal"));
describe('calculateCanvasDiagonal', () => {
    test('should calculate diagonal correctly for positive values', () => {
        expect((0, calculateCanvasDiagonal_1.default)('3', '4')).toBeCloseTo(5);
        expect((0, calculateCanvasDiagonal_1.default)('6', '8')).toBeCloseTo(10);
        expect((0, calculateCanvasDiagonal_1.default)('5', '12')).toBeCloseTo(13);
    });
    test('should return 0 for length and width of 0', () => {
        expect((0, calculateCanvasDiagonal_1.default)('0', '0')).toBe(0);
    });
    test('should handle negative values correctly', () => {
        expect((0, calculateCanvasDiagonal_1.default)('-3', '4')).toBeCloseTo(5);
        expect((0, calculateCanvasDiagonal_1.default)('3', '-4')).toBeCloseTo(5);
        expect((0, calculateCanvasDiagonal_1.default)('-3', '-4')).toBeCloseTo(5);
    });
    test('should handle non-numeric strings by returning NaN', () => {
        expect((0, calculateCanvasDiagonal_1.default)('a', '4')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('3', 'b')).toBeNaN();
        expect((0, calculateCanvasDiagonal_1.default)('a', 'b')).toBeNaN();
    });
});
//# sourceMappingURL=calculateCanvasDiagonal.test.js.map