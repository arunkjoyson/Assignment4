"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
describe("calculateCanvasSize", () => {
    test("returns correct result", () => {
        const result = (0, calculateCanvasSize_1.default)("10", "100");
        expect(result).toEqual(1000);
    });
});
//# sourceMappingURL=calculateCanvasSize.test.js.map