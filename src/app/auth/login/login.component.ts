import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth/auth.service';
import { ApiService } from '../../core/service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  canAction: boolean;
  hasError: boolean;
  authenticator$: any;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private router: Router
  ) {
    this.canAction = true;
  }

  ngOnInit() {}

  onSubmit(formData: any) {
    this.canAction = false;
    this.hasError = false;
    this.api.get(['token.json']).subscribe(
      (data: any) => {
        this.auth.login(data.access_token);
      }, (err: any) => {
        this.hasError = true;
        this.canAction = true;
      }, () => {
        //
      }
    );
  }

}
