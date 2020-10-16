import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../interfaces/famousPeople';
import { GCComputerScienceHOFService } from '../services/gccomputer-science-hof.service';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent implements OnInit {
  people: People;

  constructor(private route: ActivatedRoute, private resultService: GCComputerScienceHOFService) { }

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data: People) => this.people = data);
  }

}
