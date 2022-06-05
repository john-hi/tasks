import { Component } from '@angular/core';
import { fibonacci } from '../fib.function';
import { FibService } from '../fib.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4-page.component.html',
  styleUrls: ['./task4-page.component.scss']
})
export class Task4PageComponent {
  public result: string = '';
  private _fibService: FibService;



  constructor(fibService: FibService) {
    this._fibService = fibService;
    // this._fibService = new FibService(); не нужно из-за injectable
  }

  // constructor(private _fibService: FibService) {

  // }     аналог, только с краткой записью "инверсия контроля IoC" и "внедрение зависимостей DI"

  public fib(str: string): void {
    let n: number = Number.parseInt(str, 10);
    let sum: number = this._fibService.memFibonacci(n);
    this.result = sum.toString();
  }
}
