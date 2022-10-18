import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  IFiltroProduto,
  IPaginacaoProduto,
  IProduto,
} from "./produto-crud/produto.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  private readonly api = `${environment.API}`;

  static readById(id: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpclient: HttpClient, private snackbar: MatSnackBar) {}

  showmessage(msg: string): void {
    this.snackbar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(produto: IProduto): Observable<IProduto> {
    return this.httpclient.post<IProduto>(`${this.api}/produtos`, produto);
  }

  read(filtro: IFiltroProduto): Observable<IPaginacaoProduto> {
    return this.httpclient.get<IPaginacaoProduto>(
      `${this.api}/produtos?limit=${filtro.limit}&page=${filtro.page}`
    );
  }

  readById(id: string): Observable<IProduto> {
    const url = `${this.api}/produtos/${id}`;
    return this.httpclient.get<IProduto>(url);
  }

  update(produto: IProduto): Observable<IProduto> {
    const url = `${this.api}/produtos/${produto.id}`;
    return this.httpclient.put<IProduto>(url, produto);
  }

  deletar(id: number): Observable<IProduto> {
    const url = `${this.api}/produtos/${id}`;
    return this.httpclient.delete<IProduto>(url);
  }
}
