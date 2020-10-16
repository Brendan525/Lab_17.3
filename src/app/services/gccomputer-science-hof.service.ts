import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { FamousPerson, People } from '../interfaces/famousPeople';


@Injectable({
  providedIn: 'root'
})
export class GCComputerScienceHOFService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<People>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
  }

  getDetails(url:string) {
    return this.http.get<FamousPerson>(url);
  }
}
