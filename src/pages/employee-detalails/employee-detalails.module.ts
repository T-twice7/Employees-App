import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeDetalailsPage } from './employee-detalails';

@NgModule({
  declarations: [
    EmployeeDetalailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeDetalailsPage),
  ],
})
export class EmployeeDetalailsPageModule {}
