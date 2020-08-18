import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  logIn(admin: Admin) {
    this.http
      .post<{ token: string }>('http://localhost:3000/admins/login', {
        name: admin.userName,
        password: admin.password,
      })
      .subscribe((result) => {
        console.log(result);
        if (result.token) {
          this.router.navigateByUrl('/home');
        }
      });
  }
}
