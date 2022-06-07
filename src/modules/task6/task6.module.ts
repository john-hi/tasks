import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task6RoutingModule } from './task6-routing.module';
import { Task6PageComponent } from './task6/task6-page.component';


@NgModule({
  imports: [
    CommonModule,
    Task6RoutingModule
  ],
  declarations: [
    Task6PageComponent
  ]
})
export class Task6Module { }
