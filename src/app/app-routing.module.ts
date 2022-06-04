import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task1',
    loadChildren: () => import('../modules/task1/task1.module').then(m => m.Task1Module)
  },
  {
    path: 'task3',
    loadChildren: () => import('../modules/task3/task3.module').then(m => m.Task3Module)
  },
  {
    path: 'task4',
    loadChildren: () => import('../modules/task4/task4.module').then(m => m.Task4Module) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
