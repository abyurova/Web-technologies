import { Component, OnInit } from '@angular/core';
import { SumOperation } from './makeOperation';
import { SubOperation } from './makeOperation';
import { MulOperation } from './makeOperation';
import { DivOperation } from './makeOperation';

import { CalculatorInterface } from './CalcInterface';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {

  public sum : number;
  public numberA : number;
  public numberB : number;
  public myLabel : String  = " "

  public buttons : number[][];

  public myObject : CalculatorInterface;

  constructor() { 
    this.buttons = [];
  }

  ngOnInit() {
    this.numberA = 0;
    this.numberB = 0;
    this.sum = 0;

    for (var i : number = 0; i < 3; ++i) {
      this.buttons[i] = [];
      for (var j : number = 0; j < 3; ++j) {
          this.buttons[i][j] = i * 3 + j + 1
      }
    }
  }

  makeAddition() {
    this.myObject = new SumOperation()
    this.myLabel = "+"
  }

  makeSubstraction() {
    this.myObject = new SubOperation()
    this.myLabel = "-"
  }
  makeMultiplication() {
    this.myObject = new MulOperation()
    this.myLabel = "*"
  }
  makeDivision() {
    this.myObject = new DivOperation()
    this.myLabel = "/"
  }
  

  getResult() {
    this.sum = this.myObject.getResult(this.numberA, this.numberB);
  }
}
