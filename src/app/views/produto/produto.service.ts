import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './produto-crud/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  static readById(id: string) {
    throw new Error('Method not implemented.');
  }

  api = 'http://localhost:3000/produtos'

  constructor(
    private httpclient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

      showmessage(msg: string): void {
     this.snackbar.open(msg, 'x', {
       duration: 3000,
       horizontalPosition: 'right',
       verticalPosition: "top"
     })
   }   
   create(produto: produto): Observable<produto> {
    return this.httpclient.post<produto>(this.api, produto);
  }
  read(): Observable<produto[]> {
    return this.httpclient.get<produto[]>(this.api)
  }
  readById(id: string): Observable<produto> {
    const url = `${this.api}/${id}`;
    return this.httpclient.get<produto>(url);
  }
  update(produto: produto): Observable<produto> {
    const url = `${this.api}/${produto.id}`;
    return this.httpclient.put<produto>(url, produto);
  }
  deletar(id: number): Observable<produto> {
    const url = `${this.api}/${id}`;
    return this.httpclient.delete<produto>(url);
  }
}

