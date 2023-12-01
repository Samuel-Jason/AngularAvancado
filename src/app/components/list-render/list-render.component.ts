import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animalDetails = '';

  animals: Animal[] = [
    {name: "Torca", type: "Dog", age : 2},
    {name: "Tom", type: "Cat", age : 4},
    {name: "Frida", type: "Dog", age : 10},
    {name: "Bob", type: "Horse", age : 12},
  ];

  showAge(animal: Animal): void {
    this.animalDetails = `nome: ${animal.name} e idade ${animal.age}`;
  }

}
