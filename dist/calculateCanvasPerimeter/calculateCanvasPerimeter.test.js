"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasPerimeter_1 = __importDefault(require("./calculateCanvasPerimeter"));
describe('calculateCanvasPerimeter', () => {
    test('should return correct perimeter for valid inputs', () => {
        expect((0, calculateCanvasPerimeter_1.default)('10', '100')).toEqual(220);
        expect((0, calculateCanvasPerimeter_1.default)('5', '5')).toEqual(20);
    });
    test('should return 0 if both length and width are 0', () => {
        expect((0, calculateCanvasPerimeter_1.default)('0', '0')).toEqual(0);
    });
    test('should throw error for negative values', () => {
        expect(() => (0, calculateCanvasPerimeter_1.default)('-10', '100')).toThrow('Length and width must be non-negative values');
        expect(() => (0, calculateCanvasPerimeter_1.default)('10', '-100')).toThrow('Length and width must be non-negative values');
    });
    test('should return NaN for non-numeric inputs', () => {
        expect((0, calculateCanvasPerimeter_1.default)('abc', '100')).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)('10', 'xyz')).toBeNaN();
        expect((0, calculateCanvasPerimeter_1.default)('abc', 'xyz')).toBeNaN();
    });
    test('should throw error for null inputs', () => {
        expect(() => (0, calculateCanvasPerimeter_1.default)(null, '10')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasPerimeter_1.default)('10', null)).toThrow('Length and width are required');
    });
    test('should throw error for undefined inputs', () => {
        expect(() => (0, calculateCanvasPerimeter_1.default)(undefined, '10')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasPerimeter_1.default)('10', undefined)).toThrow('Length and width are required');
    });
});
//# sourceMappingURL=calculateCanvasPerimeter.test.js.map