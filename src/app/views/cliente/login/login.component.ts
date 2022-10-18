import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Users } from '../users.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Users
  loginform: FormGroup
  submitted = true;

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
  }

  logar(): void {
    this.submitted = false;
    this.loginservice.login(this.loginform.value.email,
      this.loginform.value.password)
      .subscribe(
        users =>
        this.loginservice.showmessage(`Bem vindo(a),${users.name}`), 
        responser =>
          this.loginservice.showmessage((responser.error.message), true),
          
           ()=>{
            this.router.navigate(['/produtos'])
          } 
      )
  } 
  cadastra(): void {
    this.router.navigate(['/cadastra'])
  }





}
