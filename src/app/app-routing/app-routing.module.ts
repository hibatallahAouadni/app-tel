import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../_guards/auth.guard';

const router: Route[] = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'fr/login',
    component: LoginComponent,
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  { 
    path: 'home',
    component: DashboardComponent,
    loadChildren: '../dashboard/dashboard-module.module#DashboardModuleModule',
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      breadcrumb: 'Not Found'
    }
  }
  
  ];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(router)],
  declarations: [ 
    //NotFoundComponent 
    ],
  exports:[ RouterModule ]
})
export class RoutingModuleModule { }