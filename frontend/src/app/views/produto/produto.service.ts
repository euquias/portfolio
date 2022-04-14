import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto } from './produto-crud/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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

}

