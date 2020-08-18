import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(admin: Admin) {
    this.http
      .post<{ token: string }>(
        'http://localhost:3000/admins/login/' + admin.userName,
        {
          password: admin.password,
        }
      )
      .subscribe((result) => {
        console.log(result);
      });
  }
}
