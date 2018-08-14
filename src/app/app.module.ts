import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginPage } from '../pages/login/login';
import { EmployeesPage } from '../pages/employees/employees';
import { EmployeeDetalailsPage } from '../pages/employee-detalails/employee-detalails';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpdatePage } from '../pages/update/update';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    EmployeeDetalailsPage,
    EmployeesPage,
    LoginPage,
    HomePage,
    UpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmployeeDetalailsPage,
    EmployeesPage,
    LoginPage,
    HomePage,
    UpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}