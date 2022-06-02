export function factorialRecursive(n: number): number {
    if(n === 1) {
        return 1;
     } else {
         return n * factorialRecursive(n - 1);
     }
}