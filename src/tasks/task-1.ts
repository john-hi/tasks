export function factorial(n: number): number {
    let result: number = 1;
    for(let i = 1; i <= n; i = i + 1) {
        result = result * i;
    }
    return result;
}




export function factorialRecursive(n: number): number {
    if(n === 1) {
        return 1;
     } else {
         return n * factorialRecursive(n - 1);
     }
}


export function f(x: number): number {
    return x * x;
}