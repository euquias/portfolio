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
  public avancarDisabled: boolean = false;

  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filtro = {
      limit: 3,
      page: 1,
    };
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos(filtro: any = this.filtro) {
    console.log("filtro", filtro);
    this.produtoservice
      .read(filtro)
      .subscribe((produtos: IPaginacaoProduto) => {
        console.log("PRODUTOOOOOOOOO", produtos);
        this.produtos = produtos;
      });
  }

  public voltar(): void {
    console.log("voltar");
  }

  public irParaPagiana(pagina: number): void {
    console.log("irParaPagiana", pagina);
  }

  public avancar(): void {
    const { paginas } = this.produtos;
    const quantidadeMaximaPaginas = this.filtro.page + 1;
    if (this.filtro.page >= 1 && quantidadeMaximaPaginas <= paginas) {
      this.filtro = {
        ...this.filtro,
        page: quantidadeMaximaPaginas,
      };
      this.getProdutos();
      this.avancarDisabled = false;
    } else {
      this.avancarDisabled = true;
    }
  }

  onedit(id): void {
    this.router.navigate(["/update", id], { relativeTo: this.route });
    console.log(id);
  }

  oneremove(id): void {
    this.router.navigate(["/remover", id], { relativeTo: this.route });
  }
}
