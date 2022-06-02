import { Component } from '@angular/core';
import { factorialRecursive } from '../factorial-recursive.function';
import { factorial } from "../factorial.function";

@Component({
  templateUrl: './task1-page.component.html',
  styleUrls: ['./task1-page.component.scss']
})
export class Task1PageComponent {
  public result1: string = '';
  public result2: string = '';
  public input: string = '';
  
  constructor() { }

  public calc(str: string): void {
    let n: number = Number.parseInt(str, 10);
    let fact: number = factorial(n);
    this.result1 = fact.toString();
  }

  public calcNgModel(): void {
    let n: number = Number.parseInt(this.input, 10);
    let fact: number = factorialRecursive(n);
    this.result2 = fact.toString();
  }
}

