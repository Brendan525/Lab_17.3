import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, } from '../interfaces/donut';
import { GCDonutService } from '../services/gcdonut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
 
  donut: Donut;
 

  constructor(private route: ActivatedRoute, private resultService: GCDonutService) { }

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data: Donut) => this.donut = data);

    this.resultService.getDetails(this.donut.ref).subscribe(
      (data: Donut) => 
        this.donut = data);
    }
  }

