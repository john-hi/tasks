import { Injectable } from '@angular/core';

import { fibonacci } from './fib.function';

@Injectable()
export class FibService {
  private _results: (number | undefined)[];

  constructor() {
    this._results = [];
  }

  public memFibonacci(n: number): number {
    if (this._results[n] !== undefined) {
      return this._results[n] as number;
    } else {
      const fibN = this.fibonacci(n);
      this._results[n] = fibN;
      return fibN;
    }
  }

  private fibonacci(n: number): number {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return this.memFibonacci(n - 1) + this.memFibonacci(n - 2);
  }


}
