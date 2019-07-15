import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule
  ],
  declarations: []
})
export class ContactListModule { }