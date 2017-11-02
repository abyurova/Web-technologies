"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum_operation_1 = require("./operations/sum.operation");
var sub_operation_1 = require("./operations/sub.operation");
var mul_operation_1 = require("./operations/mul.operation");
var div_operation_1 = require("./operations/div.operation");
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.operations = new Array(new sum_operation_1.SumOperation(), new sub_operation_1.SubOperation(), new div_operation_1.DivOperation(), new mul_operation_1.MulOperation());
    }
    Calculator.prototype.findOperation = function (_operation) {
        return this.operations.find(function (x) { return x.operation == _operation; });
    };
    Calculator.prototype.calculate = function (_operation, a, b) {
        var x = this.findOperation(_operation);
        return x.execute(a, b);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calc.js.map