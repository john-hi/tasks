import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Task10RoutingModule } from './task10-routing.module';
import { Task10PageComponent } from './task10/task10-page.component';


@NgModule({
  declarations: [
    Task10PageComponent
  ],
  imports: [
    CommonModule,
    Task10RoutingModule
  ]
})
export class Task10Module { }
