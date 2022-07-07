import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/views/cliente/login.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class CadastoProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private loginservice:LoginService
  ) { }

  ngOnInit(): void {
  }

  adiciona(): void {
    this.router.navigate(['/criaproduto'])
  } 
  islogin():boolean{
    return this.loginservice.islogin()
  }

}
