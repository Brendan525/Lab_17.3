import { Component, OnInit } from '@angular/core';
import { People } from '../interfaces/famousPeople';
import { GCComputerScienceHOFService } from '../services/gccomputer-science-hof.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  people: People;

  constructor(private resultService: GCComputerScienceHOFService) { }

  ngOnInit(): void {

    //this.resultService.queryParams.subscribe((data: People) => this.people = data);

    this.resultService.getPeople().subscribe(
      (data: People) => {
        this.people = data 
      }
    );
  }
}
