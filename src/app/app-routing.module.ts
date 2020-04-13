import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoSelectionComponent } from './rules/no-selection/no-selection.component';
import { CommonComponent } from './rules/common/common.component';
import { ErrorHandlingComponent } from './rules/error-handling/error-handling.component';
import { DialogComponent } from './rules/dialog/dialog.component';
import { ConfirmDialogComponent } from './rules/confirm-dialog/confirm-dialog.component';
import { WizardComponent } from './rules/wizard/wizard.component';
import { MainTableComponent } from './rules/main-table/main-table.component';

const routes: Routes = [
  { path: 'no-selection', component: NoSelectionComponent },
  { path: 'common', component: CommonComponent },
  { path: 'error-handling', component: ErrorHandlingComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'confirm-dialog', component: ConfirmDialogComponent },
  { path: 'wizard', component: WizardComponent },
  { path: 'main-table', component: MainTableComponent },
  { path: '', redirectTo: '/no-selection', pathMatch: 'full' },
  { path: '**', redirectTo: '/no-selection', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
