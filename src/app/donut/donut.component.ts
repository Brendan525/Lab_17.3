import { Component, OnInit } from '@angular/core';
import { Donut } from '../interfaces/donut';
import { GCDonutService } from '../services/gcdonut.service';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  
  donut: Donut;

  constructor(private resultService: GCDonutService) { }

  ngOnInit(): void {
    this.resultService.getDounts().subscribe(
      (data: Donut) => {
        this.donut = data 
      }
    );
  }
}
