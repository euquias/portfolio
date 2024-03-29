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
  public voltarDisabled: boolean = false;


  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filtro = {
      limit: 10,
      page: 2
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
        this.produtos = produtos;
      });
  }

  public voltar(): void {
    console.log("voltar");
    const { paginas } = this.produtos;
    const quantidadeMinimoPaginas = this.filtro.page - 1;
    if (this.filtro.page < 10 && quantidadeMinimoPaginas <= paginas) {
      this.filtro = {
        ...this.filtro,
        page: quantidadeMinimoPaginas,
      };
      this.getProdutos();
      /* this.voltarDisabled = true; */
    } else {
      /* this.voltarDisabled = true; */
    }
  }

  public paginaum(pagina: number): void {
    const { paginas } = this.produtos;
    this.filtro.page = 1;
    this.getProdutos();
  }
  public paginadois(pagina: number): void {
    const { paginas } = this.produtos;
    this.filtro.page = 2;
    this.getProdutos();
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

  onedit(id: any): void {
    this.router.navigate(["/update", id], { relativeTo: this.route });
    console.log(id);
  }

  oneremove(id: any): void {
    this.router.navigate(["/remover", id], { relativeTo: this.route });
  }



}
