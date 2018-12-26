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
  text2first: string;
  text2second: string;

  constructor() {
    this.text2first = '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת :  {point.name} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה:  + {point.name} </td></tr> </table>';
    this.text2second = '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת :  {point.name} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה:  + {point.name} </td></tr> </table>';

  }
}
