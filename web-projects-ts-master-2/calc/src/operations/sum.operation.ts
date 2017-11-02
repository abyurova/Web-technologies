export class SumOperation{
    operation: string;
    param1: number;
    param2: number;
    res: number = 0;

    constructor(){
        this.operation = "+";
    }

    execute(numbers:number[]){
        for (let i in numbers) {
            this.res += numbers[i];
         } 
         return this.res
    }


}