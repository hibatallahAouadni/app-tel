import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactListComponent } from '../contact-list/contact-list.component';

// i18n
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AngularFontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faPlus, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faChevronLeft);

export function HttpLoaderFactory(httpClient: HttpClient) {
   return new TranslateHttpLoader(httpClient);
} 
export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use(localStorage.getItem('lang') || 'fr');
}

@NgModule({
  imports: [
    CommonModule, 
    FontAwesomeModule, 
    DashboardRoutingModule,
     TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) 
  ],
  providers: [ ],
  declarations: [ 
    ContactFormComponent, 
    ContactListComponent 
    ],
  exports: [ TranslateModule ]
})
export class DashboardModuleModule {
  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang(translate.getBrowserLang());
  }
 }