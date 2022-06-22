export function factorial(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i = i + 1) {
    result = result * i;
  }
  return result;
}
