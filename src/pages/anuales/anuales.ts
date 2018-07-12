import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Evento } from '../../assets/data/evento';
import { EVENTOS } from '../../assets/data/eventosAnuales';


@Component({
  selector: 'page-home',
  templateUrl: 'anuales.html'
})
export class Anuales implements OnInit{

  today = new Date();
  mes = this.today.getMonth() + 1;
  eventosAnuales : Evento[] = EVENTOS;
  mesActivo = this.obtenerNombreMes(this.mes);

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){

  }
  
  nextMonth(){
    this.mes = this.mes + 1;
    if(this.mes == 13) this.mes = 1;
    this.mesActivo = this.obtenerNombreMes(this.mes);
    console.log(this.mes);
  }

  previousMonth(){
    this.mes = this.mes - 1;
    if(this.mes == 0) this.mes = 12;
    this.mesActivo = this.obtenerNombreMes(this.mes);
    console.log(this.mes);
  }

  obtenerNombreMes(i){
    i = i-1;
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Deciembre";
    
    return month[i];
  }

  

  

}
