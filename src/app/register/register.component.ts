import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  warUsername: string = 'hidd';
  warFullname: string = 'hidd';
  warEmail: string = 'hidd';
  warPass: string = 'hidd';
  warConfirmPassword: string = 'hidd';
 

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.username.valid){this.warUsername = "hidd"}
    else{this.warUsername = "vis";}

    if(this.fullname.valid){this.warFullname = "hidd"}
    else{this.warFullname = "vis";}

    if(this.email.valid){this.warEmail = "hidd"}
    else{this.warEmail = "vis";}

    if(this.password.valid){this.warPass = "hidd"}
    else{this.warPass = "vis";}

    if(this.confirmPassword.valid){this.warConfirmPassword = "hidd"}
    else{this.warConfirmPassword = "vis";}

    if(this.registerForm.valid){console.log(this.registerForm.value);}
  }

  get username() {return this.registerForm.get('username')}
  get fullname() {return this.registerForm.get('fullname')}
  get email() {return this.registerForm.get('email')}
  get password() {return this.registerForm.get('password')}
  get confirmPassword() {return this.registerForm.get('email')}
 

}
