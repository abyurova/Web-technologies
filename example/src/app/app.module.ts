import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import { MusicsComponent } from './musics/musics.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    NewsComponent,
    MusicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    MusicsComponent,
    NewsComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
