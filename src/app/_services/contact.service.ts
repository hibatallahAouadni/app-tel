import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class ContactService {

  ApiURL = "https://jsonplaceholder.typicode.com";
  httpOptions;
  handleError;

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.ApiURL + '/users');
  }

  getContact(id) {
    return this.http.get<Contact>(this.ApiURL + '/users/' + id);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.ApiURL + '/useers/', contact, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateContact(contact:Contact): Observable<Contact> {
    return this.http.put<Contact>(this.ApiURL + '/users/' + contact.id, contact, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteContact(id) {
    return this.http.delete<Contact>(this.ApiURL + '/users/' + id, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  

}