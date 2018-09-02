import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Desfile } from '../../assets/data/desfile';
import { DESFILESSEPTIEMBRE } from '../../assets/data/desfilesSeptiembre';



@Component({
  selector: 'page-about',
  templateUrl: 'fiestas.html'
})
export class Fiestas implements OnInit{

  constructor(public navCtrl: NavController) {
    //

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
  mes = this.today.getMonth() + 1;

  ngOnInit(){
    
  }

  getYear() {
    var selectedYear = this.today.getFullYear();

    if(this.today.getMonth() + 1 === 9 && this.today.getDate() > 4 && this.today.getHours() > 16){
      selectedYear = selectedYear + 1;
    }else{
      if(this.today.getMonth() + 1 >= 10){
        selectedYear = selectedYear + 1;
      }
    }
    //console.log(selectedYear);
    return selectedYear;
  }

  estamosEnFiestas(){
    // if(this.mes === 9 && this.today.getDate() > 4 && this.today.getHours() > 16 && this.today.getDate() < 9){
    if(this.mes === 9 && this.today.getDate() > 4 && this.today.getDate() < 10){
      if(this.today.getDate() === 5 && this.today.getHours() < 16) {
        return false;
      }
      return true;
    }
    return false;
  }

  esDia4(){
    //console.log('hoy' + this.hoy +'dia' +this.today.getDate() +'mes' +this.mes +'año' +this.anio);
    if(this.today.getDate() === 4 && this.mes === 9){
      return true;
    }
    return false;
  }  

  showLogo(){
    if(this.esDia4()){
      return false
    }
    if(this.estamosEnFiestas()){
      return false;
    } else {
      if(this.today.getDate() === 5 && this.today.getMonth() + 1 === 9){
        return false;
      }
    }
    return true;
  }

}
