import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
