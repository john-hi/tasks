import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4PageComponent } from './task4/task4-page.component';


@NgModule({
  declarations: [
    Task4PageComponent
  ],
  imports: [
    CommonModule,
    Task4RoutingModule
  ]
})
export class Task4Module { }
