"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
function main() {
    const area = (0, calculateCanvasSize_1.default)("10", "20");
    const coveragePerLiter = 11.4;
    const paintRequired = (0, paintRequiredCalculator_1.default)(area, coveragePerLiter);
    console.log(`${paintRequired} is required to cover ${area} of canvas.`);
}
main();
//# sourceMappingURL=main.js.map