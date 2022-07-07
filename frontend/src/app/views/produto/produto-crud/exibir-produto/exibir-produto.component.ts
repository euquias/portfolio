import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.produtoservice.read().subscribe(produtos => {
      this.produtos = produtos
      console.log(produtos)
    })
  }
  onedit(id): void {
    this.router.navigate(['/update', id], { relativeTo: this.route });
    console.log(id)
  }
  oneremove(id): void {
    this.router.navigate(['/remover', id], { relativeTo: this.route })
  }


}
