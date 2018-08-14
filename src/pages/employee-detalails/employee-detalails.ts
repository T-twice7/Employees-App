import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeesPage } from '../employees/employees';
import Emparr from '../employees/myArr';
import {Details} from '../employees/myClss';
import { AlertController } from 'ionic-angular';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the EmployeeDetalailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detalails',
  templateUrl: 'employee-detalails.html',
})
export class EmployeeDetalailsPage {

  

url="";
  pass = EmployeesPage;
  temp = Emparr;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  };
  // edt(Name, Surname, role, IDno, Cntx) {
  //   let temp = new Details(Name, Surname, role, IDno, Cntx)
  //   this.navCtrl.push(EmployeesPage,temp);

  // }

del(i: any){
  this.temp.splice(i,1)
}
update(i: any){

  const prompt = this.alertCtrl.create({
    title: 'Update',
    message: "Make the changes and save else cancel",
    inputs: [
      {
        name: 'pic',
        value: Emparr[i].pic
      },
      {
        name: 'Name',
        placeholder: 'Enter Name',
        value: Emparr[i].Name
      },
      {
        name: 'Surname',
        placeholder: 'Enter Surname',
        value: Emparr[i].Surname
      },
      {
        name: 'role',
        placeholder: 'Enter role',
        value: Emparr[i].role
      },
      {
        name: 'IDno',
        placeholder: 'Enter IDno',
        value: Emparr[i].IDno
      },
      {
        name: 'Cntx',
        placeholder: 'Enter Cntx',
        value: Emparr[i].Cntx
      },
      
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {

          let obj=new Details(data.Name,data.Surname,data.role,data.IDno,data.Cntx,data.pic);

          this.temp[i]=(obj);
          // console.log('Saved clicked'+ this.temp[i]);
        }
      }
    ]
  });
  prompt.present();
  // this.temp[i];
  // this.navCtrl.push(UpdatePage,this.temp[i]);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetalailsPage');
  
  }

}
