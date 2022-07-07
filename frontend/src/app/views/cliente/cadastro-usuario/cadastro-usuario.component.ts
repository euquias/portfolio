import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  loginform: FormGroup

  constructor(
    private loginservice: LoginService,
    private fb: FormBuilder,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
      confirmPassword: this.fb.control('', [Validators.required])
    })
  }

  cadastra(): void {
    this.loginservice.cadastra(
      this.loginform.value.name,
      this.loginform.value.email,
      this.loginform.value.password,
      this.loginform.value.confirmPassword
    ).subscribe(users =>
      this.loginservice.showmessage('Cadastro realizado com sucesso!'),
      responser =>
        this.loginservice.showmessage(responser.error.message),
        ()=>{
          this.router.navigate(['/login'])
        }
    )
  }
  login(): void {
    this.router.navigate(['/login'])
  }
}
