import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../rules-styles.scss'],
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onShowExample(event: Event) {
    console.log('onShowExample');

    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      // disableClose: true,
      panelClass: 'input-dialog',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data === undefined) {
        return;
      }
    });
  }
}
