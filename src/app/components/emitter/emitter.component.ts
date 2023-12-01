import { Component, OnInit } from '@angular/core';
import { ChangeNumberComponent } from "../change-number/change-number.component";

@Component({
    selector: 'app-emitter',
    standalone: true,
    templateUrl: './emitter.component.html',
    styleUrl: './emitter.component.css',
    imports: [ChangeNumberComponent]
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;



  constructor(){}
  ngOnInit(): void {
  }

  onChangenumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }











}
