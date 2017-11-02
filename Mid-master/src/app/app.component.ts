import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { PostComponent } from 'app/components/post/post.component';
import { IPost } from 'app/components/post/post.model';

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('post', {read: ViewContainerRef })
  private postContainer: ViewContainerRef ;

  constructor(private cfr: ComponentFactoryResolver, private service: AppService) {}

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(PostComponent);
    this.service._post.subscribe((post: IPost) => {      
      const componentRef = this.postContainer.createComponent(factory);
      componentRef.instance.title = post.title;
      componentRef.instance.author = post.author;
      componentRef.instance.content = post.content;
    });
    
  } 
}
