import { Calculator } from "./calc";

const calc = new Calculator();
var firstNumber: number;
var secondNumber: number;
var operation: string;


// $(document).ready(() => {
//     const firstNumber: JQuery<HTMLInputElement> = $('#firstNumber') as JQuery<HTMLInputElement>;
//     const secondNumber: JQuery<HTMLInputElement> = $('#firstNumber') as JQuery<HTMLInputElement>;

//     const button: JQuery<HTMLButtonElement> = $('.button-operation') as JQuery<HTMLButtonElement>;

//     button.click(()=>{
//         alert(calc.calculate(String(button.val), Number(firstNumber.val), Number(secondNumber.val)));
//     })
// });

console.log(calc.calculate("+", [1000,2,123,-123, -100]));
console.log(calc.calculate("*", [1,2,213]));
console.log(calc.calculate("/", [12342,2,123]));
console.log(calc.calculate("-", [1,2234, -213]));

//console.log(calc.calculate("+", firstNumber,secondNumber));

// console.log(calc.calculate("*", 1,2));
// console.log(calc.calculate("/", 12342,2));
// console.log(calc.calculate("-", 1,2234));



// console.log(calc.sum(1,2));
// console.log(calc.sub(1,2));
// console.log(calc.mul(1,2));
// console.log(calc.div(1,2));


