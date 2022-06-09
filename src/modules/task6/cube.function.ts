export function cube(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let sum: number = 0;
    let k: number = 3;
    for (let odd = k, i = 1; i <= n; odd = odd + 2, i = i + 1) {
        k = odd;
        sum = sum + odd;
    }
    return sum;
}