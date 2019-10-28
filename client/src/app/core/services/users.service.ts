import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { httpOptions } from '../http-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private loginStatusSubject = new BehaviorSubject(false);
  bLogin$ = this.loginStatusSubject.asObservable();
  uid: string;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('/api/gifts/users/info').subscribe(data => {
      if (data.uid) {
        this.loginStatusSubject.next(true);
        this.uid = data.uid;
      }
    });
  }

  sendLoginStatus(message: boolean) {
    this.loginStatusSubject.next(message); //all subscribers get the new value
  }

  register(formGroup: FormGroup): Observable<any> {
    let user = {
      // uid: formGroup.controls.uid.value,
      email: formGroup.controls.email.value.trim(),
      pwd: formGroup.controls.pwd.value
      // firstName: formGroup.controls.firstName.value.trim(),
      // lastName: formGroup.controls.lastName.value.trim()
    };
    console.log(user);
    return this.httpClient.post('/api/gifts/users/register', user, httpOptions);
  }

  login(uid: string, pwd: string): any {
    if (!(uid || '').trim() || !pwd) {
      return throwError('Username and password are required.');
    }
    return this.httpClient.post(
      '/api/gifts/users/login',
      { uid: uid, pwd: pwd },
      httpOptions
    );
  }

  logout() {
    this.httpClient.get('/api/gifts/users/logout').subscribe(r => {
      console.log(r);
    });
    this.loginStatusSubject.next(false);
  }

  sendMessage(params: any) {
    return this.httpClient.post('/api/gifts/msg', params, httpOptions);
  }
}
