import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { LayoutModule } from '@angular/cdk/layout';

import { DialogComponent } from './rules/dialog/dialog.component';
import { MainTableComponent } from './rules/main-table/main-table.component';
import { ErrorHandlingComponent } from './rules/error-handling/error-handling.component';
import { WizardComponent } from './rules/wizard/wizard.component';
import { CommonComponent } from './rules/common/common.component';
import { NoSelectionComponent } from './rules/no-selection/no-selection.component';
import { ConfirmDialogComponent } from './rules/confirm-dialog/confirm-dialog.component';
import { ExampleDialogComponent } from './rules/dialog/example-dialog/example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MainTableComponent,
    ErrorHandlingComponent,
    WizardComponent,
    CommonComponent,
    NoSelectionComponent,
    ConfirmDialogComponent,
    ExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
