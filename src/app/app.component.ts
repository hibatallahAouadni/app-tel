import { Component, Input, Output } from '@angular/core';
import { Contact } from './contact';
import { Address } from './address';
import { Company } from './company';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular';

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

}
