import { Component } from '@angular/core';

import { Fiestas } from '../fiestas/fiestas';
import { ContactPage } from '../contact/contact';
import { Anuales } from '../anuales/anuales';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Anuales;
  tab2Root = Fiestas;
  tab3Root = ContactPage;

  constructor() {

  }
}
