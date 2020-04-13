import { Component } from '@angular/core';

import { title, version, author, lastChangeYear } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = title;
  public author: string = author;
  public version: string = version;
  public lastChangeYear: string = lastChangeYear;
}
