import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Donut } from './interfaces/donut';
import { People } from './interfaces/famousPeople';



@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }

  getDounts() {
    return this.http.get<Donut>('https://grandcircusco.github.io/demo-apis/donuts.json')
    //return this.http.get<Posts>(`${this.apiUrl}/r/aww/.json`)
  }

  getFamousPeople() {
    return this.http.get<People>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
  }
  
}
