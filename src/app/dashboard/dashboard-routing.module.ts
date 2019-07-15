import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactListComponent } from '../contact-list/contact-list.component';

const router: Route[] = [
  { 
    path: '',
    component: ContactListComponent
  },
  {
    path: 'add-contact',
    component: ContactFormComponent
  },
  {
    path: 'edit-contact/:id',
    component: ContactFormComponent
  }
  ];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(router), FormsModule ],
  declarations: [ ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }