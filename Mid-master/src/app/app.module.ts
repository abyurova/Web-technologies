import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { AppService } from 'app/app.service';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents: [PostComponent],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
