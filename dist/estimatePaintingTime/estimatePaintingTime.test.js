"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estimatePaintingTime_1 = __importDefault(require("./estimatePaintingTime"));
describe('estimatePaintingTime', () => {
    test('should calculate painting time correctly for valid inputs', () => {
        expect((0, estimatePaintingTime_1.default)(100, 10)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(200, 20)).toBe(10);
        expect((0, estimatePaintingTime_1.default)(150, 15)).toBe(10);
    });
    test('should return 0 if area is 0', () => {
        expect((0, estimatePaintingTime_1.default)(0, 10)).toBe(0);
    });
    test('should return Infinity if painting speed is 0', () => {
        expect((0, estimatePaintingTime_1.default)(100, 0)).toBe(Infinity);
    });
    test('should throw error for negative area', () => {
        expect(() => (0, estimatePaintingTime_1.default)(-100, 10)).toThrow('Area and painting speed must be non-negative');
    });
    test('should throw error for negative painting speed', () => {
        expect(() => (0, estimatePaintingTime_1.default)(100, -10)).toThrow('Area and painting speed must be non-negative');
    });
    test('should throw error for both values negative', () => {
        expect(() => (0, estimatePaintingTime_1.default)(-100, -10)).toThrow('Area and painting speed must be non-negative');
    });
    test('should throw error for non-numeric inputs', () => {
        expect(() => (0, estimatePaintingTime_1.default)("100", 10)).toThrow('Both area and painting speed must be numbers');
        expect(() => (0, estimatePaintingTime_1.default)(100, "10")).toThrow('Both area and painting speed must be numbers');
        expect(() => (0, estimatePaintingTime_1.default)(null, 10)).toThrow('Both area and painting speed must be numbers');
        expect(() => (0, estimatePaintingTime_1.default)(100, undefined)).toThrow('Both area and painting speed must be numbers');
    });
});
//# sourceMappingURL=estimatePaintingTime.test.js.map