import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/views/cliente/login.service";
import { Users } from "src/app/views/cliente/users.model";
import {
  trigger,
  state,
  transition,
  animate,
  style,
} from "@angular/animations";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  animations: [
    trigger("prefilappeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transform: "translate(-200px, -10px)" }),
        animate("800ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  perfilstate = "ready";
  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {}

  islogin(): boolean {
    return this.loginservice.islogin();
  }
}
