import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeDetalailsPage } from '../employee-detalails/employee-detalails';
import Emparr from '../employees/myArr';
import {Details} from '../employees/myClss';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import img from '../employees/image';


@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  Name1:string;
   Surname1:string;
    role1:string;
    IDno1:number;
    Cntx1:number;

  empCount:number;
  url : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  };


  List(Name, Surname, role, IDno, Cntx) {

    let B = new Details(Name, Surname, role, IDno, Cntx,this.url);
    this.navCtrl.push(EmployeeDetalailsPage,B);

  }

  addE(Name, Surname, role, IDno, Cntx) {

    let a = new Details(Name, Surname, role, IDno, Cntx,this.url);
    Emparr.push(a);
    this.empCount = Emparr.length;

  }
  

  clr(){
    this.Name1='';
    this.Surname1='';
    this.role1='';
    this.IDno1=0;
    this.Cntx1=0;

  }

  img(event:any){
    if(event.target.files && event.target.files[0]){
        let reader = new FileReader();
   
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
   
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files);
        // this.navCtrl.push(EmployeeDetalailsPage,reader);
      }

}
  

  ionViewDidLoad() {
    this.empCount = Emparr.length;
    console.log('ionViewDidLoad EmployeesPage');
  }

  

}
