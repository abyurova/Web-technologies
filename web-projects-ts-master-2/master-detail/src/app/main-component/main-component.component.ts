import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { ThirdComponentComponent } from '../third-component/third-component.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {


  @ViewChild('components', { read: ViewContainerRef })
  private componentContainer: ViewContainerRef;
  public componentNumber: number;
  constructor(private cfr: ComponentFactoryResolver) { }

    selectComponent(componentNumber){
      this.componentNumber = componentNumber;
      this.componentContainer.clear();
      if(!this.componentNumber){
        return;
      }
      if(this.componentNumber == 1){
        const factory = this.cfr.resolveComponentFactory(FirstComponentComponent);
        const componentRef = this.componentContainer.createComponent(factory);
      }
      else if(this.componentNumber == 2){
        const factory = this.cfr.resolveComponentFactory(SecondComponentComponent);
        const componentRef = this.componentContainer.createComponent(factory);
      }
      else if(this.componentNumber == 3){
        const factory = this.cfr.resolveComponentFactory(ThirdComponentComponent);
        const componentRef = this.componentContainer.createComponent(factory);
      }
     
    }

  ngOnInit() {
  }

}
