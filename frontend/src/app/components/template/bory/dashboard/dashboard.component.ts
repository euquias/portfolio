import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  const couter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setInterval(() =>{
    const el =
    document.querySelector('number');
    const elvalue=
    Number(el.getAttribute('data-value'));
    if(couter !==elvalue){
      couter++;
      el.innerHTML = ´${couter}%´;
    }
  
  }, 80);

}
