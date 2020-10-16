import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutComponent } from './donut/donut.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DonutComponent,
    HallOfFameComponent,
    DonutDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
