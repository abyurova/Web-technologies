interface IOperation{

    operation: string;

    param1: number;
    param2: number;

    res: number;

    execute(params: number[]): number;


}