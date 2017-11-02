
import { CalculatorInterface } from "./CalcInterface";

export class SumOperation implements CalculatorInterface {

    getResult(A: number, B: number): number {
        return A + B;
    }

}

export class SubOperation implements CalculatorInterface {

    getResult(A: number, B: number): number {
        return A - B;
    }

}

export class MulOperation implements CalculatorInterface {
    getResult(A: number, B: number): number {
        return A * B
    }
}


export class DivOperation implements CalculatorInterface {
    getResult(A: number, B: number): number {
        if (B == 0) {
            console.log("impossible delete to zero")
            return 0;
        }
        return A / B
    }
}
