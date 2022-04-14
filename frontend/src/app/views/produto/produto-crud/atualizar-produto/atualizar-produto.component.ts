import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { produto } from '../produto.model';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {

  produto: produto

  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoservice.readById(id).subscribe(produto => {
      this.produto = produto
    });
  }
  salvar(): void {
   this.produtoservice.update(this.produto).subscribe(() =>{
 /*     this.produtoservice.showOnMessage('Pedido atualizado com sucesso!')  */
     this.router.navigate(['produto'])
    } )
  } 
  cancel(): void {
    this.router.navigate(['produto'])
  }
}
