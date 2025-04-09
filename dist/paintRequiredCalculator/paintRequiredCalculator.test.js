"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
describe("paintRequiredCalculator", () => {
    test("should calculate paint required correctly", () => {
        expect((0, paintRequiredCalculator_1.default)(50, 10)).toEqual(5);
        expect((0, paintRequiredCalculator_1.default)(100, 20)).toEqual(5);
        expect((0, paintRequiredCalculator_1.default)(75, 15)).toEqual(5);
    });
    test("should throw error if painted area is negative", () => {
        expect(() => (0, paintRequiredCalculator_1.default)(-50, 10)).toThrow("Painted area must be non-negative and coverage per liter must be greater than 0");
    });
    test("should throw error if coverage per liter is zero", () => {
        expect(() => (0, paintRequiredCalculator_1.default)(50, 0)).toThrow("Painted area must be non-negative and coverage per liter must be greater than 0");
    });
    test("should throw error if coverage per liter is negative", () => {
        expect(() => (0, paintRequiredCalculator_1.default)(50, -10)).toThrow("Painted area must be non-negative and coverage per liter must be greater than 0");
    });
    test("should throw error for non-numeric inputs", () => {
        expect(() => (0, paintRequiredCalculator_1.default)("50", 10)).toThrow("Both painted area and coverage per liter must be numbers");
        expect(() => (0, paintRequiredCalculator_1.default)(50, "10")).toThrow("Both painted area and coverage per liter must be numbers");
        expect(() => (0, paintRequiredCalculator_1.default)(null, 10)).toThrow("Both painted area and coverage per liter must be numbers");
        expect(() => (0, paintRequiredCalculator_1.default)(50, undefined)).toThrow("Both painted area and coverage per liter must be numbers");
    });
});
//# sourceMappingURL=paintRequiredCalculator.test.js.map