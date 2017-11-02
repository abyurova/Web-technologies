import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public people: object;
  private serviceUrl = 'http://services.odata.org/TripPinRESTierService';
  
  constructor(private http: HttpClient) {
    this.init();
}
private async init() {
  const me = await this.http.get(`${this.serviceUrl}/peopleng `).map(r => r as any).toPromise();
  this.people = await this.http.get(`${this.serviceUrl}/People?$filter=BestFriend/UserName eq 'russelwhite'`).toPromise();
}

}
