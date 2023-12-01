import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-first-comp',
    templateUrl: './first-comp.component.html',
    styleUrl: './first-comp.component.css',
})
export class FirstCompComponent implements OnInit {

  name: string = 'Jason';
  age = 20;
  job = "Desenvolvedor";
  hobbies = ["corre", "assistir", "jogar"];
  car = {
     name : "Camaro",
     year : 2022,
  };


  constructor(){
  }

  ngOnInit(): void {

  }
}
