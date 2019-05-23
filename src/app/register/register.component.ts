import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  warEmail: string = 'hidd';
  warPass: string = 'hidd';
 

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
    if(this.email.valid){
      this.warEmail = "hidd";
    }
    else{this.warEmail = "vis";}

    if(this.password.valid){
      this.warPass = "hidd";
    }
    else{this.warPass = "vis";}

    if(this.registerForm.valid){console.log(this.registerForm.value);}
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
 
}
