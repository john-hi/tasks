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
    loadChildren: () => import('../modules/task4/task4.module').then(m => m.Task4Module) 
  },
  {
    path: 'task5',
    loadChildren: () => import('../modules/task5/task5.module').then(m => m.Task5Module) 
  },
  {
    path: 'task6',
    loadChildren: () => import('../modules/task6/task6.module').then(m => m.Task6Module)
  },
  {
    path: 'task10',
    loadChildren: () => import('../modules/task10/task10.module').then(m => m.Task10Module)
  }
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
