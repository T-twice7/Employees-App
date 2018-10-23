import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UpdatePage } from '../pages/update/update';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { EmployeeDetalailsPage } from '../pages/employee-detalails/employee-detalails';
import { EmployeesPage } from '../pages/employees/employees';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

