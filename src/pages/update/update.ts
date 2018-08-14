import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EmployeeDetalailsPage } from '../employee-detalails/employee-detalails';
import { EmployeesPage } from '../employees/employees';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import Emparr from '../employees/myArr';
import {Details} from '../employees/myClss';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

arrTemp=Emparr;
Name;
Surname;
role;
IDno;
Cntx;
url="";
pass =EmployeeDetalailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  

delete(i){
  this.arrTemp.splice(i,1);
}

back(){
  this.navCtrl.pop();
}


updateName(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Name",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
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

          let obj=new Details(data.text,Emparr[i].Surname,Emparr[i].role,Emparr[i].IDno,Emparr[i].Cntx,Emparr[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateSurname(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Surname",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
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

          let obj=new Details(Emparr[i].Name,data.text,Emparr[i].role,Emparr[i].IDno,Emparr[i].Cntx,Emparr[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateRole(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "role",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
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

          let obj=new Details(Emparr[i].Name,Emparr[i].Surname,data.text,Emparr[i].IDno,Emparr[i].Cntx,Emparr[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}
updateIDno(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "ID",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
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

          let obj=new Details(Emparr[i].Name,Emparr[i].Surname,Emparr[i].role,data.text,Emparr[i].Cntx,Emparr[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}

updateContact(i) {
  
  const prompt = this.alertCtrl.create({
    title: 'Edit',
    message: "Contact",
    inputs: [
      {
        name: 'text',
        placeholder: 'Enter text'
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

          let obj=new Details(Emparr[i].Name,Emparr[i].Surname,Emparr[i].role,Emparr[i].IDno,data.text,Emparr[i].pic);

          this.arrTemp[i]=(obj);
          
          console.log('Saved clicked'+ this.arrTemp[i]);
        }
      }
    ]
  });
  prompt.present();
}

insertImage(event){
  if(event.target.files && event.target.files[0]){
    let reader = new FileReader();

    reader.onload = (event:any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files);
  }
}
}
