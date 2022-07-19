import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { produto } from '../produto.model';

@Component({
  selector: 'app-remover-produto',
  templateUrl: './remover-produto.component.html',
  styleUrls: ['./remover-produto.component.css']
})
export class RemoverProdutoComponent implements OnInit {
  produto: produto ={
    name:'',
    price:null
  }
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
  cancel(): void {
    this.router.navigate(['produtos'])
  }
  remover(): void {
    this.produtoservice.deletar(this.produto.id).subscribe(() => {
      this.produtoservice.showmessage('Produto excluido com Susseco') 
      this.router.navigate(['produtos']);
    })
  }
}
