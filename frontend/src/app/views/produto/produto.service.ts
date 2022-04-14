import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './produto-crud/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  static readById(id: string) {
    throw new Error('Method not implemented.');
  }

  api = 'http://localhost:3001/produto'

  constructor(
    private httpclient: HttpClient
  ) { }

  /*   showmessage(msg: string): void {
     this.snackBar.open(msg, '', {
       duration: 3000,
       horizontalPosition: 'right',
       verticalPosition: "top"
     })
   }  */
  create(produto: produto): Observable<produto> {
    return this.httpclient.post<produto>(this.api, produto)
  }
  read(): Observable<produto[]> {
    return this.httpclient.get<produto[]>(this.api)
  }
  readById(id: string): Observable<produto> {
    const url = `${this.api}/${id}`;
    return this.httpclient.get<produto>(url);
  }
  update(pedido: produto): Observable<produto> {
    const url = `${this.api}/${pedido.id}`;
    return this.httpclient.put<produto>(url, pedido);
  }
  deletar(id: number): Observable<produto> {
    const url = `${this.api}/${id}`;
    return this.httpclient.delete<produto>(url);
  }
}

