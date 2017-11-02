export class SumOperation{
    operation: string;
    param1: number;
    param2: number;
    res: number = 0;

    constructor(){
        this.operation = "+";
    }

    execute(){
        this.res = this.param1 + this.param2
         return this.res
    }


}