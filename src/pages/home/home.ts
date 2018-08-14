import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { EmployeesPage } from '../employees/employees';
import { EmployeeDetalailsPage } from '../employee-detalails/employee-detalails';
import { UpdatePage } from '../update/update';

import Emparr from '../ARR';
import {Details} from '../Class';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home1Root =LoginPage;
  home2Root = EmployeesPage;
  home3Root = EmployeeDetalailsPage;

  constructor(public navCtrl: NavController) {

  }

  
}
