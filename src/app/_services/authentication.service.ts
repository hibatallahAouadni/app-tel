import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContactService } from '../_services/contact.service';

@Injectable()
export class AuthenticationService {

  apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient, private sc: ContactService) { }

  login(username: string, password: string) {

    if(username == "admin" && password == "admin") {
      let user = this.sc.getContact(1);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}