import { Component } from '@angular/core';

import packageInfo from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = packageInfo.title;
  public author: string = packageInfo.author;
  public version: string = packageInfo.version;
  public lastChangeYear: string = packageInfo.lastChangeYear;
}
