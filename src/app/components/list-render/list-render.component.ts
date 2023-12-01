import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals = [
    {name: "Torca", type: "Dog"},
    {name: "Tom", type: "Cat"},
    {name: "Frida", type: "Dog"},
    {name: "Bob", type: "Horse"},
  ];

}
