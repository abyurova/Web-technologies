export class SubOperation{

    operation: string;
    param1: number;
    param2: number;
    res: number = 0;

    constructor(){
        this.operation = "-";
    }

    execute(numbers:number[]){
        this.res = numbers[0]
        for (var i = 1;  i< numbers.length; i++) {
            this.res -= numbers[i];
         } 
         return this.res
    }

}