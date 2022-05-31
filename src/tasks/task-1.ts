export function factorial(n: number): number {
    let zero: number = 1;
    for (let i = 1; i < n; i = i++) {
        if (n > i) {
            zero = zero * i++;
        }
        else if (zero > n) {
            break
        }
    }
    return n * zero - 1
}