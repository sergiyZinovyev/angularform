import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  warEmail: string = 'hidd';
  warPass: string = 'hidd';
  warTerm: string = 'hidd';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    check: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.email.valid){
      this.warEmail = "hidd";
    }
    else{this.warEmail = "vis";}

    if(this.password.valid){
      this.warPass = "hidd";
    }
    else{this.warPass = "vis";}

    if(this.check.valid){
      this.warTerm = "hidd";
    }
    else{this.warTerm = "vis";}

    if(this.loginForm.valid){console.log(this.loginForm.value);}
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get check() {
    return this.loginForm.get('check');
  }


}
