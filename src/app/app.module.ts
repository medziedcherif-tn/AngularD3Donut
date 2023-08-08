import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { DataControlsComponent } from './data-controls/data-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    ChartContainerComponent,
    DataControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
