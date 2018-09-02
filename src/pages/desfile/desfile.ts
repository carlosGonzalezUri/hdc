import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Desfile } from '../../assets/data/desfile';
import { DESFILESSEPTIEMBRE } from '../../assets/data/desfilesSeptiembre';

@Component({
  selector: 'page-desfile',
  templateUrl: 'desfile.html',
})
export class DesfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesfilePage');
  }

  desfile : Desfile[] = DESFILESSEPTIEMBRE;


}
