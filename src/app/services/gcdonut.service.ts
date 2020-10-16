import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Donut } from '../interfaces/donut';
import { DonutDetailComponent } from '../donut-detail/donut-detail.component';

@Injectable({
  providedIn: 'root'
})
export class GCDonutService {

  constructor(private http: HttpClient) { }

  getDounts() {
    return this.http.get<Donut>('https://grandcircusco.github.io/demo-apis/donuts.json')
    //return this.http.get<Posts>(`${this.apiUrl}/r/aww/.json`)
  }

  getDetails(url:string) {
    return this.http.get<Donut>(url);
  }
}
