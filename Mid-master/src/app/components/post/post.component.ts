import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private _title : string;
  public get title() : string {
    return this._title;
  }
  public set title(v : string) {
    this._title = v;
  }

  private _author : string;
  public get author() : string {
    return this._author;
  }
  public set author(v : string) {
    this._author = v;
  }

  private _content : string;
  public get content() : string {
    return this._content;
  }
  public set content(v : string) {
    this._content = v;
  }

  date: number;


  constructor() { }

  ngOnInit() {
    this.date = Date.now();
  }

}
