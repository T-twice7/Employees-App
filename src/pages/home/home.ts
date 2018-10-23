import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public modalCtrl: ModalController) {
  }

  sign()
  {
    let profileModal = this.modalCtrl.create(EmployeesPage);
    profileModal.present();
  }
  Register()
  {
    this.navCtrl.push( LoginPage);
  }
}
