import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Task3PageComponent } from './task3-page/task3-page.component';
import { Task3RoutingModule } from './task3-routing.module';


@NgModule({
  declarations: [
    Task3PageComponent
  ],
  imports: [
    CommonModule,
    Task3RoutingModule
  ]
})
export class Task3Module { }
