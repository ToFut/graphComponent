import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartModule} from 'angular-highcharts';
import { GraphComponentComponent } from './components/graph-component/graph-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponentComponent
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
