import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../_services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  address: FormGroup;
  geo: FormGroup;
  company: FormGroup;

  constructor() { }

  ngOnInit() {
    this.geo = new FormGroup({
      lat: new FormControl(),
      lng: new FormControl(),
    });

    this.address = new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),
      geo: this.geo,
    });

    this.company = new FormGroup({
      companyname: new FormControl(),
      catcht: new FormControl(),
      bs: new FormControl()
    });

    this.form = new FormGroup({ 
      id: new FormControl(Validators.required),
      firstname: new FormControl(Validators.required),
      username: new FormControl(Validators.required),
      email: new FormControl(Validators.required),
      phone: new FormControl([Validators.minLength(8), Validators.required]),
      website: new FormControl(Validators.required),
      address: this.address,
      company: this.company
    });
    console.log(this.form);
  }

}