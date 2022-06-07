export function sqr(n: number): number {
    let sum: number = 0;
    for(let odd = 1, i = 1; i <= n ; odd = odd + 2, i = i + 1) {
        sum = sum + odd;
    }
    return sum;
}