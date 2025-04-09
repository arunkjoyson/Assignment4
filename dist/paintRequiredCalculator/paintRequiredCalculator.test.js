"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
describe("paint required calculator", () => {
    test("should return expected result", () => {
        const result = (0, paintRequiredCalculator_1.default)(50, 10);
        expect(result).toEqual(5);
    });
});
//# sourceMappingURL=paintRequiredCalculator.test.js.map