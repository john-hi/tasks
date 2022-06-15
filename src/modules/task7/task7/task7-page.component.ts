import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7-page.component.html',
  styleUrls: ['./task7-page.component.scss']
})
export class Task7PageComponent {
  public helix: number[][] = [];

  constructor() { }


  public createHelix(str: string): void {
    let n: number = Number.parseInt(str, 10);
    this.helix = this.getHelix(n)
  }


  private getHelix(n: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < n; i + 1) {
      for (let j = 0; j < n; j + 1) {
        if (i = n - 1) {
          result[i][j] = result[i * 2 + 1][j];
          if (i = n * n - 1) {
            result[i][j] = result[i - 1][j];
            if (i = n * 5) {
              result[i][j] = result[i][j - 1];
              if (j = n / n) {
                result[i][j] = result[i][j + n];
              }
            }
          }
        }
      }
    }
    return result
  }
}
