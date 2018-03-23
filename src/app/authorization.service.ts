import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthorizationService {

  public isRegistered = false;
  public isLogged = false;
  public token = '';

  constructor(private http: HttpClient) { }

  public registerUser(userData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:3005/register',
    JSON.stringify(userData))
      .subscribe(
        res => {
          this.isRegistered = true;
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  public logIn (userData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:3005/authenticate',
    JSON.stringify(userData))
      .subscribe(
        res => {
          this.token = res['token'];
          this.isLogged = true;
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
