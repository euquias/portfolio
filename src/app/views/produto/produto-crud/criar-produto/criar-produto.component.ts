import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';
import { produto } from '../produto.model';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: produto = {
    name: '',
    price: '',
  }

  /* form: FormGroup */
  constructor(
    /* private fb:FormBuilder, */
    private produtoservice: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  criarproduto(): void {
    this.produtoservice.create(this.produto)
    .subscribe(users =>
      this.produtoservice.showmessage('Cadastro realizado com sucesso!'),
      responser =>
        this.produtoservice.showmessage(responser.error.message),
        ()=>{
          this.router.navigate(['produtos'])
        }
    )
  }
  cancel(): void {
    this.router.navigate(['/produtos'])
  }
} 
