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
  token: string;
  timer: any;

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
            this.token = result.token;
            const expDate = new Date(new Date().getTime() + 3600000);
            localStorage.setItem('token', this.token);
            localStorage.setItem('expiration', expDate.toISOString());
            this.autoLogOut(3600000);
            this.router.navigateByUrl('/home');
            this.modalServ.loginSpinnerFlag = false;
          }
        });
    }, 1500);
  }

  autoLogIn() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const expiration = localStorage.getItem('expiration');
    const now = new Date();
    const expiresIn = new Date(expiration).getTime() - now.getTime();
    console.log(expiresIn);
    if (expiresIn > 0) {
      this.token = token;
      this.isAuth = true;
      this.autoLogOut(expiresIn);
    } else {
      this.logOut();
    }
  }

  autoLogOut(time: number) {
    this.timer = setTimeout(() => {
      this.logOut();
    }, time);
  }

  logOut() {
    clearTimeout(this.timer);
    localStorage.clear();
    this.token = '';
    this.userName = '';
    this.isAuth = false;
    this.router.navigateByUrl('/login');
  }
}
