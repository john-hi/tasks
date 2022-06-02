import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1PageComponent } from './task1-page/task1-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Task1RoutingModule
  ],
  declarations: [
    Task1PageComponent
  ]
})
export class Task1Module { }
