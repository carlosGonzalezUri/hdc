import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Desfile } from '../../assets/data/desfile';
import { DESFILESSEPTIEMBRE } from '../../assets/data/desfilesSeptiembre';

@Component({
  selector: 'page-about',
  templateUrl: 'fiestas.html'
})
export class Fiestas {

  constructor(public navCtrl: NavController) {

  }

  today = new Date;  

  text:any = {
    Year: 'Year',
    Month: 'Meses',
    Weeks: "Semanas",
    Days: "Días",
    Hours: "Horas",
    Minutes: "Minutos",
    Seconds: "Segundos",
    MilliSeconds: "MilliSeconds"
  };

  desfile : Desfile[] = DESFILESSEPTIEMBRE;
  divider = "";

  anio = this.getYear();
  hoy = this.today.getDate();

  getYear() {
    var selectedYear = this.today.getFullYear();

    if(this.today.getMonth() === 9 && this.today.getDate() > 4 && this.today.getHours() > 16){
      selectedYear = selectedYear + 1;
    }else{
      if(this.today.getMonth() >= 10){
        selectedYear = selectedYear + 1;
      }
    }
    return selectedYear;
  }

  estamosEnFiestas(){
    if(this.today.getMonth() === 9 && this.today.getDate() > 4 && this.today.getHours() > 16 && this.today.getDate() < 9){
      return true;
    }
    return false;
  }

  esDia4(){
    if(this.today.getDate() === 4 && this.today.getMonth() === 9){
      console.log(this.hoy);
      return true;
    }
    return false;
  }

}
