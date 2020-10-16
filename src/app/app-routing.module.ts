import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutComponent } from './donut/donut.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';


const routes: Routes = [
  { path: 'donut', component: DonutComponent },
  { path: 'donut-detail', component: DonutDetailComponent},
  { path: 'famous-People', component: FamousPeopleComponent},
  { path: 'famous-Person', component: FamousPersonDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
