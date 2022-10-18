import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "../../produto.service";
import { IFiltroProduto, IPaginacaoProduto } from "../produto.model";

@Component({
  selector: "app-exibir-produto",
  templateUrl: "./exibir-produto.component.html",
  styleUrls: ["./exibir-produto.component.css"],
})
export class ExibirProdutoComponent implements OnInit {
  public produtos: IPaginacaoProduto;
  public filtro: IFiltroProduto;

  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filtro = {
      limit: 2,
      page: 1,
    };
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(filtro: IFiltroProduto = this.filtro) {
    this.produtoservice
      .read(filtro)
      .subscribe((produtos: IPaginacaoProduto) => {
        console.log("PRODUTOOOOOOOOO", produtos);
        this.produtos = produtos;
      });
  }

  onedit(id): void {
    this.router.navigate(["/update", id], { relativeTo: this.route });
    console.log(id);
  }

  oneremove(id): void {
    this.router.navigate(["/remover", id], { relativeTo: this.route });
  }
}
