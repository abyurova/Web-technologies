import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {
 

  week : String[] = [
    'Su',
    'Mo',
    "Tu",
    'We',
    'Th',
    'Fr',
    'Sa'
  ];
  month: string;  
  year: number;
  // days: string[][] = [];
  days: MyDate[] = [];
  cols: number[] = [0,1,2,3,4,5,6];
  firstInit: Boolean = false;
  chosenDate1: MyDate;
  chosenDate2: MyDate;
  firstChosen: Boolean = false;
  secondChosen: Boolean = false;


  @Input() set currentYear(currentYear: number) {
    this.year = currentYear;
    if(this.firstInit == true){
      this.drawMonth();
    }

    //console.log(this.year)

  }

  @Input() set currentMonth(currentMonth: string) {
    this.month =  currentMonth;
    this.firstInit = true;
    this.drawMonth();
   
  }

  drawMonth(){
    if(this.firstChosen && this.secondChosen){
      var maxDate = moment([this.chosenDate2.myYear, this.chosenDate2.myMonth, this.chosenDate2.myDay]);
      var minDate = moment([this.chosenDate1.myYear, this.chosenDate1.myMonth, this.chosenDate1.myDay]);
    }
   

    var _month = moment().month(this.month).month();
    var _year = moment().year(this.year).year();
    var currentDate = moment([_year, _month]);
    var firstday = currentDate.format('d');
     var daysInMonth = currentDate.daysInMonth();
   
    let iter = 0;

    let j = 0;
      while(Number(firstday) != j){
       this.days[iter] = new MyDate(Number(_year), Number(_month), 0, false, false);
       j++;
       iter++;
      }
      for(let i = 1; i<daysInMonth+1; i++){
    
        this.days[iter] = new MyDate(Number(_year), Number(_month), i, false, false);
       
        if(moment([_year, _month, i]).format('YYYY MM DD') == moment(new Date()).format('YYYY MM DD')){
          console.log(moment([_year, _month, i]).format('YYYY MM DD'));
          console.log(moment(new Date()).format('YYYY MM DD'));
          this.days[iter] = new MyDate(Number(_year), Number(_month), i, true, true);
        }
        if(moment([_year, _month, i]).isBetween(minDate, maxDate) 
        || (moment([_year, _month, i]).isSame(minDate))
        || (moment([_year, _month, i]).isSame(maxDate)) ){

          this.days[iter] = new MyDate(Number(_year), Number(_month), i, false, true);
        }
        
     
        iter++;
      }

  }

  chooseDay(r:MyDate){
    if(!this.firstChosen){
      this.chosenDate1 = r;
      this.firstChosen = true;
    }
    else if (this.chosenDate1 && this.firstChosen){
      this.chosenDate2 = r;
      this.secondChosen = true;
      this.drawMonth()
    }
    else if(this.firstChosen && this.secondChosen){
      this.chosenDate1 = r;
      this.firstChosen = true;
      this.chosenDate2 = null;
      this.secondChosen = false;
      this.drawMonth();
    }
    console.log( r);
  }

  constructor() { }

  ngOnInit() {
  }

}

export class MyDate{
  myMonth: number;
  myYear: number;
  myDay: number;
  inRange: boolean;
  isToday: boolean;
 

  constructor( myYear: number, myMonth: number,  myDay: number, isToday:boolean, inRange: boolean, ){
    this.myDay = myDay;
    this.myMonth = myMonth;
    this.myYear = myYear;
    this.isToday = isToday;
    this.inRange = inRange;
  }
}
