import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventoSeptiembre } from '../../assets/data/eventoSeptiembre';
import { EVENTOSSEPTIEMBRE } from '../../assets/data/eventosSeptiembre';

@Component({
  selector: 'page-contact',
  templateUrl: 'septiembre.html'
})
export class Septiembre {

  constructor(public navCtrl: NavController) {

  }

  today = new Date; 
  hoy = this.onInit();

  eventoSeptiembre : EventoSeptiembre[] = EVENTOSSEPTIEMBRE;

  onInit(){
    if(this.estamosEnFiestas() ){
      return this.today.getDate();
    }else{
      return 3;
    }
  }

  isDataLoaded(){
    if(this.eventoSeptiembre == undefined){
      return false;
    }
    return true;
  }

  nextDay(){
    this.hoy = this.hoy + 1 ;
    console.log(this.hoy)
    if(this.hoy > 9) this.hoy = 9;
  }

  previousDay(){
    this.hoy = this.hoy - 1;
    if(this.hoy < 3) this.hoy = 3;
  }

  estamosEnFiestas(){
    if(this.today.getMonth() === 9 && this.today.getDate() > 4 && this.today.getHours() > 16 && this.today.getDate() < 9){
      return true;
    }
    return false;
  }
}
