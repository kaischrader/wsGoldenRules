import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-example',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
})
export class ExampleDialogComponent implements OnInit {
  public formGroup: FormGroup;

  public firstNameControl: FormControl;
  public lastNameControl: FormControl;
  public emailControl: FormControl;

  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.firstNameControl = new FormControl(this.firstName, [
      Validators.required,
      Validators.minLength(2),
    ]);

    this.lastNameControl = new FormControl(this.lastName, [
      Validators.required,
      Validators.minLength(2),
    ]);

    this.emailControl = new FormControl(this.email, [Validators.email]);

    this.formGroup = new FormGroup(
      {
        firstName: this.firstNameControl,
        lastName: this.lastNameControl,
        email: this.emailControl,
      },
      {
        updateOn: 'change',
      }
    );

    this.formGroup.statusChanges.subscribe(() => {
      this.dialogRef.disableClose = !this.formGroup.pristine;
    });
  }

  hasFirstName(): boolean {
    return this.firstNameControl.value;
  }

  hasLastName(): boolean {
    return this.lastNameControl.value;
  }

  hasEmail(): boolean {
    return this.emailControl.value;
  }

  onCreateClick() {
    console.log('onCreateClick');

    this.snackBar.openFromComponent(ConfirmComponent, {
      duration: 5000,
      data: {
        firstName: this.firstNameControl.value,
        lastName: this.lastNameControl.value,
        email: this.hasEmail() ? this.emailControl.value : '<no email given>',
      },
    });
  }

  getFirstNameError() {
    if (this.firstNameControl.hasError('required')) {
      return 'First name is required!';
    }

    if (this.firstNameControl.hasError('minlength')) {
      return 'The first name must consist at least of 2 characters!';
    }

    return '';
  }

  getLastNameError() {
    if (this.lastNameControl.hasError('required')) {
      return 'Last name is required!';
    }

    if (this.lastNameControl.hasError('minlength')) {
      return 'The last name must consist at least of 2 characters!';
    }

    return '';
  }

  getEmailError() {
    if (this.emailControl.hasError('email')) {
      return 'The text you entered is not a valid email address!';
    }

    return '';
  }
}

@Component({
  selector: 'app-confirm-component',
  template: `
    <h2>The following user has been created:</h2>
    <ul>
      <li>{{ data.firstName }} {{ data.lastName }}</li>
      <li>{{ data.email }}</li>
    </ul>
  `,
})
export class ConfirmComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
