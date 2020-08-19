import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalServ: SessionService
  ) {}

  isAuth = false;
  userName = '';

  logIn(admin: Admin) {
    this.modalServ.loginSpinnerFlag = true;
    setTimeout(() => {
      this.http
        .post<{ token: string }>('http://localhost:3000/admins/login', {
          name: admin.userName,
          password: admin.password,
        })
        .subscribe((result) => {
          console.log(result);
          if (result.token) {
            this.userName = admin.userName;
            this.isAuth = true;
            this.router.navigateByUrl('/home');
            this.modalServ.loginSpinnerFlag = false;
          }
        });
    }, 1500);
  }

  logOut() {
    this.userName = '';
    this.isAuth = false;
    this.router.navigateByUrl('/login');
  }
}
