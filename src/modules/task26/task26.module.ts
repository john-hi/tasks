import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Task26RoutingModule } from './task26-routing.module';
import { Task26PageComponent } from './task26/task26-page.component';


@NgModule({
  declarations: [
    Task26PageComponent
  ],
  imports: [
    CommonModule,
    Task26RoutingModule
  ]
})
export class Task26Module { }
