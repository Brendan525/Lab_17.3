import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People, FamousPerson } from '../interfaces/famousPeople';
import { GCComputerScienceHOFService } from '../services/gccomputer-science-hof.service';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {

  people: People;

  famousPerson: FamousPerson

  constructor(private route: ActivatedRoute, private resultService: GCComputerScienceHOFService) { }

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data: FamousPerson) => this.famousPerson = data);
    
    this.resultService.getDetails(this.famousPerson.name).subscribe(
      (data: FamousPerson) => 
        this.famousPerson = data);  
    } 
}
