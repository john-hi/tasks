import { Component } from '@angular/core';
import { fibonacci } from '../fib.function';

@Component({
  selector: 'app-task4',
  templateUrl: './task4-page.component.html',
  styleUrls: ['./task4-page.component.scss']
})
export class Task4PageComponent {
  public result: string = '';

  constructor() { }

  public fib(str: string): void {
    let n: number = Number.parseInt(str, 10);
    let sum: number = fibonacci(n);
    this.result = sum.toString();
  }
}
