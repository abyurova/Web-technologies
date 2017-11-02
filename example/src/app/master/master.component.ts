import { DetailComponent } from './../detail/detail.component';
import { MusicsComponent } from './../musics/musics.component';
import { NewsComponent } from './../news/news.component';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver  } from '@angular/core';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  @ViewChild('detail', { read: ViewContainerRef })
  private detailContainer: ViewContainerRef;

  public firstname:string;
  public lastname:string;
  
  private added:number[] = []; 
  private ids = 0;

  constructor( private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  add(){
    this.added.push(this.ids);
    const factory = this.cfr.resolveComponentFactory(DetailComponent);
    const componentRef = this.detailContainer.createComponent(factory);
    componentRef.instance.firstname = this.firstname;
    componentRef.instance.lastname = this.lastname;
    componentRef.instance.id = this.ids++;   

    componentRef.instance.onDaleteSelected.subscribe((data) => {      
      for(let i = 0; i < this.added.length; i++) {
        if(this.added[i] === data) {
          this.added.splice(i, 1);
          this.detailContainer.remove(i)
          return;
        }
      }
    }); 

  }

  // render(comp:string) {
  //   // this.detailContainer.clear();
    
  //   if(comp === 'news') {
  //     const factory = this.cfr.resolveComponentFactory(NewsComponent);
  //     const componentRef = this.detailContainer.createComponent(factory);
      
  //   } else if(comp === 'musics') {
  //     const factory = this.cfr.resolveComponentFactory(MusicsComponent);
  //     const componentRef = this.detailContainer.createComponent(factory);      
  //   }
  // }


}
