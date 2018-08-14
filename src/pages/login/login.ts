import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import { Validators } from '@angular/forms';
import Emparr from '../employees/myArr';
import {Details} from '../employees/myClss';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  name:string;
  pin:number;
  arrTemp=Emparr;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  login() {
    alert('welcome Mr'+' '+ this.name);
      this.navCtrl.push(EmployeesPage);
  }

}
