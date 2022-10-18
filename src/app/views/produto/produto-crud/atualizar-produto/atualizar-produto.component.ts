import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoService } from "../../produto.service";
import { IProduto } from "../produto.model";

@Component({
  selector: "app-atualizar-produto",
  templateUrl: "./atualizar-produto.component.html",
  styleUrls: ["./atualizar-produto.component.css"],
})
export class AtualizarProdutoComponent implements OnInit {
  produto: IProduto = {
    name: "",
    price: null,
  };

  constructor(
    private produtoservice: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.produtoservice.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }
  salvar(): void {
    this.produtoservice.update(this.produto).subscribe(
      (users) =>
        this.produtoservice.showmessage("Cadastro realizado com sucesso!"),
      (responser) => this.produtoservice.showmessage(responser.error.message),
      () => {
        this.router.navigate(["produtos"]);
      }
    );
  }
  cancel(): void {
    this.router.navigate(["produtos"]);
  }
}
