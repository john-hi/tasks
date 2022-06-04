import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task3RoutingModule } from './task3-routing.module';
import { Task3PageComponent } from './task3-page/task3-page.component';


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
