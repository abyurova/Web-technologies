import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  public firstname:string;
  public lastname:string;
  public id:number;
  
  // public subject = 
  private subject = new Subject<number>();
  public onDaleteSelected = this.subject.asObservable();
  delete(){
    this.subject.next(this.id);
  }

  ngOnInit() {
  }

}
