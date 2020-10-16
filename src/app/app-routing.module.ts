import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutComponent } from './donut/donut.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';

const routes: Routes = [
  { path: 'donut', component: DonutComponent },
  { path: 'donut-detail', component: DonutDetailComponent},
  { path: 'hall of fame', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
