import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { produto } from '../produto.model';

@Component({
  selector: 'app-exibir-produto',
  templateUrl: './exibir-produto.component.html',
  styleUrls: ['./exibir-produto.component.css']
})
export class ExibirProdutoComponent implements OnInit {
  produtos: produto[];
  constructor(
    private produtoservice: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoservice.read().subscribe(produtos =>{
      this.produtos= produtos
      console.log(produtos)
    })
  }

}
