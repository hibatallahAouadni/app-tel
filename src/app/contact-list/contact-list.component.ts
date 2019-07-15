import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../_services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() searchEmit:string;
  searchText: string = "";
  contacts: Array<Contact> = [];

  constructor(private sc: ContactService) {}

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    this.sc.getAll().subscribe(response => {
      this.contacts = response;
    })
  }

  deleteUser(userId) {
    this.contacts.splice((userId-1), 1);
  }


  emitSearch($event) {
    this.searchText = $event;
  }

}