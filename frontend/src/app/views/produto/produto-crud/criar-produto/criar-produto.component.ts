import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';
import { produto } from '../produto.model';
/* import { FormBuilder, FormGroup } from '@angular/forms'; */

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  produto: produto = {
    name: '',
    price: null,
    id: 0
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
    this.produtoservice.create(this.produto).subscribe(() => {
    /*   this.ProdutoService.showOnMessage('pedido salvo') */
      this.router.navigate(['/produto'])
    }
    ) 
  }
  cancel(): void {
    this.router.navigate(['/produto'])
  }

}
