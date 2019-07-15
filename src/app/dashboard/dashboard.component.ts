import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../_services/contact.service';
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  currentUser: Contact;
  @Input() searchEmit:string;
  searchText: string;

  constructor(private r: Router, private sc: ContactService, public translate: TranslateService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    //const browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }


  emitSearch($event) {
    this.searchText = $event;
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }

}