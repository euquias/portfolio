import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/views/cliente/login.service';
import { Users } from 'src/app/views/cliente/users.model';



@Component({
  selector: 'app-user-detall',
  templateUrl: './user-detall.component.html',
  styleUrls: ['./user-detall.component.css']
})
export class UserDetallComponent implements OnInit {
  
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }
   users():Users{ 
    return this.loginservice.users 
  }  
  islogin():boolean{
    return this.loginservice.islogin()
  }
   login(){
    this.loginservice.handlogin()
  } 
  logout(){
    this.loginservice.logout()
  }

}
