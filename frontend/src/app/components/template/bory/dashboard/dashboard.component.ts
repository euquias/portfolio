import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  
   progresso: number = 10;
   progresso1: number = 20;
   progresso2: number = 50;
  ngOnInit(): void {
  }


}