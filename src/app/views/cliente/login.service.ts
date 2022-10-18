import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Users } from "./users.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

const api = "https://euquiasapi.herokuapp.com";

@Injectable()
export class LoginService {
  users: Users;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  showmessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, "x", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  login(email: string, password: string): Observable<Users> {
    return this.http
      .post<Users>(`${api}/signin`, { email: email, password: password })
      .pipe(tap((users) => (this.users = users)));
  }

  cadastra(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Observable<Users> {
    return this.http.post<Users>(`${api}/users`, {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  }

  logout() {
    this.users = undefined;
    this.router.navigate(["/cliente"]);
  }

  handlogin(path?: string) {
    this.router.navigate(["/cliente"]);
  }

  islogin() {
    return this.users !== undefined;
  }

  errorhandler(e: any): Observable<any> {
    this.showmessage("ouve um erro!!! contate desenvolvedor", true);
    return EMPTY;
  }
}
