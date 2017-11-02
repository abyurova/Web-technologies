import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IPost } from 'app/components/post/post.model';

@Injectable()
export class AppService {

  private post = new Subject<IPost>();
  public _post = this.post.asObservable();
  private like = new Subject<number>();
  public likes = this.like.asObservable();

  constructor() { }

  createPost(post: IPost) {
    this.post.next(post);
  }
}
