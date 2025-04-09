"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
describe('calculateCanvasSize', () => {
    test('should return correct area for valid dimensions', () => {
        expect((0, calculateCanvasSize_1.default)('10', '100')).toEqual(1000);
        expect((0, calculateCanvasSize_1.default)('5', '4')).toEqual(20);
    });
    test('should return 0 when one or both dimensions are 0', () => {
        expect((0, calculateCanvasSize_1.default)('0', '10')).toEqual(0);
        expect((0, calculateCanvasSize_1.default)('10', '0')).toEqual(0);
        expect((0, calculateCanvasSize_1.default)('0', '0')).toEqual(0);
    });
    test('should throw error for negative values', () => {
        expect(() => (0, calculateCanvasSize_1.default)('-5', '10')).toThrow('Length and width must be non-negative values');
        expect(() => (0, calculateCanvasSize_1.default)('10', '-10')).toThrow('Length and width must be non-negative values');
    });
    test('should return NaN for non-numeric inputs', () => {
        expect((0, calculateCanvasSize_1.default)('abc', '10')).toBeNaN();
        expect((0, calculateCanvasSize_1.default)('10', 'xyz')).toBeNaN();
        expect((0, calculateCanvasSize_1.default)('abc', 'xyz')).toBeNaN();
    });
    test('should throw error for null values', () => {
        expect(() => (0, calculateCanvasSize_1.default)(null, '10')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasSize_1.default)('10', null)).toThrow('Length and width are required');
    });
    test('should throw error for undefined values', () => {
        expect(() => (0, calculateCanvasSize_1.default)(undefined, '10')).toThrow('Length and width are required');
        expect(() => (0, calculateCanvasSize_1.default)('10', undefined)).toThrow('Length and width are required');
    });
});
//# sourceMappingURL=calculateCanvasSize.test.js.map