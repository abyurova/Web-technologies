import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  constructor() { }
  curYear: number = parseInt(moment().format('YYYY'), 10);
  year:number = this.curYear;
 
  public months = moment.months();

  goBack = function(){
    this.year -= 1;
  }

  goFurther = function(){
    this.year += 1;
  }
  
  ngOnInit() {
    this.year = parseInt(moment().format('YYYY'), 10);
  }

}
