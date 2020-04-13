import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  formGroup: FormGroup;
  titleControl: FormControl;

  public title: string;

  constructor(public dialogRef: MatDialogRef<ExampleComponent>) {}

  ngOnInit(): void {
    this.titleControl = new FormControl(this.title, [Validators.required]);

    this.formGroup = new FormGroup(
      {
        title: this.titleControl,
      },
      {
        updateOn: 'change',
      }
    );
  }

  hasTitle(): boolean {
    return this.titleControl.value;
  }

  onCreateClick() {
    console.log('onCreateClick');
  }

  getTitleError() {
    if (this.titleControl.hasError('required')) {
      return 'Ein Titel ist erforderlich!';
    }

    return 'Unbekannter Fehler!';
  }
}
