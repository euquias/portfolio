import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/views/cliente/login.service";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"],
})
export class CadastoProdutoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  adiciona(): void {
    this.router.navigate(["/criaproduto"]);
  }
}
