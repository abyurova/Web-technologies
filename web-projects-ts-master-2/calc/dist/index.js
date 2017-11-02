"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var calc = new calc_1.Calculator();
var firstNumber;
var secondNumber;
var operation;
$(document).ready(function () {
    var firstNumber = $('#firstNumber');
    var secondNumber = $('#firstNumber');
    var button = $('.button-operation');
    button.click(function () {
        alert(calc.calculate(String(button.val), Number(firstNumber.val), Number(secondNumber.val)));
    });
});
console.log(calc.calculate("+", 1000, 2));
console.log(calc.calculate("*", 1, 2));
console.log(calc.calculate("/", 12342, 2));
console.log(calc.calculate("-", 1, 2234));
//console.log(calc.calculate("+", firstNumber,secondNumber));
// console.log(calc.calculate("*", 1,2));
// console.log(calc.calculate("/", 12342,2));
// console.log(calc.calculate("-", 1,2234));
// console.log(calc.sum(1,2));
// console.log(calc.sub(1,2));
// console.log(calc.mul(1,2));
// console.log(calc.div(1,2));
//# sourceMappingURL=index.js.map