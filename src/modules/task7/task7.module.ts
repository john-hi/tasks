import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Task7RoutingModule } from './task7-routing.module';
import { Task7PageComponent } from './task7/task7-page.component';


@NgModule({
  imports: [
    CommonModule,
    Task7RoutingModule
  ],
  declarations: [
    Task7PageComponent
  ]
})
export class Task7Module { }
