import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/components/post/post.model';
import { AppService } from 'app/app.service';

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title: string = "";
  author: string = "";
  content: string = "";

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  onCreate() {
    let post: IPost = {
      title: this.title,
      author: this.author,
      content: this.content
    };
    this.service.createPost(post);
  }

}
