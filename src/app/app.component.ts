import { Component } from '@angular/core';
import {json} from './components/models/outcome.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraphComponent';
  data = json;
  text: string;
  constructor() {
    this.text = '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : ' + this.data[0].dataContext +  '</td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה: ' + this.data[1].dataContext + '</td></tr> </table>';
  }
}
