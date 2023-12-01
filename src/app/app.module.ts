import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgStyle } from '@angular/common';

@NgModule({
  declarations: [
    FirstCompComponent,

  ],
  imports: [
    CommonModule,
    NgStyle,
    DirectivesComponent,
    ParentDataComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeuModulo { }
