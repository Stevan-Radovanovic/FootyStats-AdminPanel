import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../shared/services/session.service';
import { AuthService } from '../shared/services/auth.service';
import { Admin } from '../shared/models/admin.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(public modalServ: SessionService, public authServ: AuthService) {}

  initForm() {
    this.authForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  logIn() {
    const admin: Admin = {
      userName: this.authForm.controls.userName.value,
      password: this.authForm.controls.password.value,
    };
    this.authServ.logIn(admin);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
