import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController, ModalController, ToastController } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import { Validators } from '@angular/forms';
import Emparr from '../employees/myArr';
import {Details} from '../employees/myClss';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public modalCtrl: ModalController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  showToast() 
  {
    let toast = this.toastCtrl.create({
      message: 'New user added',
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }


 Register()
 {
  const alert = this.alertCtrl.create({
    title: 'You registering to People App' ,
    subTitle: 'Please make sure all the details provided are CORRECT!',
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Done',
        handler: data => {
          console.log('Registered');
          this.showToast();
          let profileModal = this.modalCtrl.create(EmployeesPage);
          profileModal.present();
        }
      }
    ]
  });
  alert.present();
}
}
