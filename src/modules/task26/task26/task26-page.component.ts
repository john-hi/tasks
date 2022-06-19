import { Component } from '@angular/core';

@Component({
  selector: 'app-task26',
  templateUrl: './task26-page.component.html',
  styleUrls: ['./task26-page.component.scss']
})
export class Task26PageComponent {
  public result: number = 0;

  constructor() { }


  public lines(strA: string, strB: string): void {
    const a: number = Number.parseInt(strA, 10);
    const b: number = Number.parseInt(strB, 10);
    this.result = this.calcLines(a, b);
  }


  private calcLines(a: number, b: number): number {
    let linesCount: number = 0;
    let x: number = 0;
    let y: number = 0;
    let stepX: number = 1;
    let stepY: number = 1;
    do {
      let edge: boolean = false;
      x = x + stepX;
      y = y + stepY;
      if (x === 0 || x === b) {
        stepX = -stepX;
        edge = true;
      }
      if (y === 0 || y === a) {
        stepY = -stepY;
        edge = true;
      }
      if (edge === true) {
        linesCount = linesCount + 1;
      }
    } while (
      !(x === 0 && y === 0) && !(x === 0 && y === a) && !(x === b && y === a) && !(x === b && y === 0)
    );
    
    return linesCount;
  }
}
