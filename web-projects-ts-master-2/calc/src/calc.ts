import { SumOperation } from "./operations/sum.operation";
import { SubOperation } from "./operations/sub.operation";
import { MulOperation } from "./operations/mul.operation";
import { DivOperation } from "./operations/div.operation";

export class Calculator {

    constructor(){}

    private operations = new Array (
        new SumOperation(),
        new SubOperation(),
        new DivOperation(),
        new MulOperation()
    )

    public findOperation(_operation:string){
       return this.operations.find(x => x.operation == _operation);
        
    }

    public calculate(_operation:string, numbers: number[]){
        var x = this.findOperation(_operation);
        return x.execute(numbers);
    }


    // public sum(a:number, b:number){
    //     return a+b;
    // }
    // public sub(a:number, b:number){
    //     return a-b;
    // }
    // public mul(a:number, b:number){
    //     return a*b;
    // }
    // public div(a:number, b:number){
    //     return a/b;
    // }

}