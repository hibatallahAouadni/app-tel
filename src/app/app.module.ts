import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';

// routing module
import { RoutingModuleModule } from './app-routing/app-routing.module';

// breadcrump module
import {BreadcrumbsModule} from "ng6-breadcrumbs";

// i18n
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// i18n pipes
import { registerLocaleData } from '@angular/common';
import { I18n } from '@ngx-translate/i18n-polyfill';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
// the second parameter 'en' is optional
registerLocaleData(localeEn, 'en');

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { ContactService } from './_services/contact.service';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports:      [ 
    BrowserModule, 
    RoutingModuleModule, 
    BreadcrumbsModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
   ],
  declarations: [ 
    AppComponent, 
    NotFoundComponent,
    HelloComponent, 
    LoginComponent, 
    HeaderComponent, 
    SidebarComponent, 
    BreadcrumbComponent, 
    DashboardComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
    ContactService, 
    AuthenticationService, 
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'en' }
  ],
  exports: [ TranslateModule ]
})
export class AppModule { }
