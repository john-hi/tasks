import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task5RoutingModule } from './task5-routing.module';
import { Task5PageComponent } from './task5/task5-page.component';


@NgModule({
  imports: [
    CommonModule,
    Task5RoutingModule
  ],
  declarations: [
    Task5PageComponent
  ]
})
export class Task5Module { }
