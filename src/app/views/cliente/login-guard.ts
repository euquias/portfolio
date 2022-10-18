import { CanLoad, Route, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuad implements CanLoad {
  constructor(private loginsevice: LoginService, private router: Router) {}
  canLoad(route: Route): boolean {
    const loggedin = this.loginsevice.islogin();
    if (!loggedin) {
      this.loginsevice.handlogin;
    }
    return loggedin;
  }
}
