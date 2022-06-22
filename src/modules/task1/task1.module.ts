import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task1PageComponent } from './task1-page/task1-page.component';
import { Task1RoutingModule } from './task1-routing.module';


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
