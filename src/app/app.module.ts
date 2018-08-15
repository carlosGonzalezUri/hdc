import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Fiestas } from '../pages/fiestas/fiestas';
import { Septiembre } from '../pages/septiembre/septiembre';
import { Anuales } from '../pages/anuales/anuales';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {CountDown} from "ng4-date-countdown-timer";


@NgModule({
  declarations: [
    MyApp,
    Fiestas,
    Septiembre,
    Anuales,
    TabsPage,
    CountDown
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Fiestas,
    Septiembre,
    Anuales,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
