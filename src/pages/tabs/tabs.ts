import { Component } from '@angular/core';

import { Fiestas } from '../fiestas/fiestas';
import { Septiembre } from '../septiembre/septiembre';
import { Anuales } from '../anuales/anuales';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Anuales;
  tab2Root = Fiestas;
  tab3Root = Septiembre;

  constructor() {

  }
}
