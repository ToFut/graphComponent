import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartModule} from 'angular-highcharts';
import { GraphComponentComponent } from './components/graph-component/graph-component.component';
import { GraphComponent2Component } from './components/graph-component2/graph-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponentComponent,
    GraphComponent2Component
  ],
  imports: [
    BrowserModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
