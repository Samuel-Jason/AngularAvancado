import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';


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
