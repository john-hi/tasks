import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4PageComponent } from './task4/task4-page.component';
import { FibService } from './fib.service';


@NgModule({
  imports: [
    CommonModule,
    Task4RoutingModule
  ],
  declarations: [
    Task4PageComponent
  ],
  providers: [
    FibService
  ]
})
export class Task4Module { }
