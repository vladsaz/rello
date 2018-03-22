import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthorizationService {

  public isRegistered = false;

  constructor(private http: HttpClient) { }

  public registerUser(userData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', `hello`);
    const options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:3005/register',
    JSON.stringify(userData), options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
