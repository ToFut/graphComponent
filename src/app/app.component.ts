import {Component} from '@angular/core';
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
    this.text2first = '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת :  {point.name.RTCorrectAvg} </td> </tr>' +
      '<tr><td style="text-align: right"> משתנה שני:  + {point.name.Short} </td></tr> </table>' ;
    this.text2second = '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת :  {point.name.LongestStrack} </td> </tr>' +
      '<tr><td style="text-align: right"> משתנה שני:  + {point.name.RTCorrectAvg} </td></tr> ' +
      '<tr><td style="text-align: right"> משתנה שלישי:  + {point.name.Short} </td></tr> </table>';

  }
}
